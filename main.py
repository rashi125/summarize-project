# Import libraries
import nltk
from datasets import load_dataset
from nltk.tokenize import sent_tokenize

from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

# Download required NLTK data
nltk.download('punkt', quiet=True)
nltk.download('punkt_tab', quiet=True)

# -------------------------------
# STEP 1: Load Dataset
# -------------------------------
print("Loading dataset...")

dataset = load_dataset("cnn_dailymail", "3.0.0")

print("Dataset loaded!")

# Take small sample
small_data = dataset['train'].select(range(5))

# Take one sample
sample = small_data[0]

print("\n===== SAMPLE ARTICLE =====\n")
print(sample['article'][:500])  # show first 500 chars

print("\n===== ACTUAL SUMMARY =====\n")
print(sample['highlights'])

# -------------------------------
# STEP 2: Sentence Tokenization
# -------------------------------

article = sample['article']

# Convert article into sentences
sentences = sent_tokenize(article)

print("\nTotal Sentences:", len(sentences))

print("\nFirst 5 sentences:\n")
for i, sent in enumerate(sentences[:5]):
    print(f"{i+1}. {sent}")

print("\nLast sentence:\n", sentences[-1])

# -------------------------------
# STEP 3: TF-IDF Summarizer
# -------------------------------

# Convert sentences into vectors
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(sentences)

# Score each sentence
scores = np.sum(X.toarray(), axis=1)

# Select top N sentences
top_n = 3
top_indices = scores.argsort()[-top_n:]

# Sort indices to maintain original order
top_indices = sorted(top_indices)

# Generate summary
summary = " ".join([sentences[i] for i in top_indices])

print("\n===== GENERATED SUMMARY =====\n")
print(summary)