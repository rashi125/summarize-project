# Extractive (TF-IDF)
import nltk
from nltk.tokenize import sent_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

# Abstractive
from transformers import pipeline

# Load model ONCE
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")


# 🔹 Extractive Summary
def extractive_summary(text, top_n=3):
    sentences = sent_tokenize(text)

    if len(sentences) <= top_n:
        return text

    vectorizer = TfidfVectorizer(stop_words="english")
    X = vectorizer.fit_transform(sentences)

    scores = np.mean(X.toarray(), axis=1)

    top_indices = scores.argsort()[-top_n:]
    top_indices = sorted(top_indices)

    summary = " ".join([sentences[i] for i in top_indices])
    return summary


# 🔹 Abstractive Summary
def abstractive_summary(text):
    result = summarizer(text[:1000], max_length=100, min_length=30, do_sample=False)
    return result[0]["summary_text"]