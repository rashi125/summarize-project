# 🧠 AI Text Summarizer (Extractive + Abstractive)

A full-stack AI-powered web application that generates **two types of summaries** from input text:

* ✂️ **Extractive Summary** (TF-IDF based)
* 🤖 **Abstractive Summary** (Transformer-based using BART)

---

## 🚀 Features

* Dual summarization approach:

  * Extractive (sentence selection)
  * Abstractive (AI-generated)
* FastAPI backend
* React + Vite frontend
* REST API integration
* Clean UI with real-time results

---

## 🧠 Tech Stack

### 🔹 Backend

* Python
* FastAPI
* Transformers (BART model)
* NLTK
* Scikit-learn (TF-IDF)
* Sumy (optional extractive)

### 🔹 Frontend

* React (Vite)
* Axios
* Tailwind CSS (optional)

---

## 📊 Models Used

* **Abstractive Model:** facebook/bart-large-cnn
* **Extractive Method:** TF-IDF (Term Frequency - Inverse Document Frequency)

---

## 📁 Project Structure

summarize-project/
│
├── backend/
│   ├── api.py
│   ├── main.py
│   ├── requirements.txt
│   └── runtime.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json


## ⚙️ Installation & Setup

### 🔹 Backend Setup

bash
cd backend
pip install -r requirements.txt
uvicorn api:app --reload


### 🔹 Frontend Setup

bash
cd frontend
npm install
npm run dev

## 🌐 API Endpoint

### POST `/summarize`

#### Request:

json
{
  "text": "Your input text here"
}


#### Response:

```json
{
  "extractive_summary": "...",
  "abstractive_summary": "..."
}
```

---

## 🚀 Deployment(working)

* Backend: Render
* Frontend:Render

---

## 🧠 Dataset

* CNN/DailyMail Dataset
* Sample size used: 5 articles (for testing)
* Model trained on ~300,000 articles

---

## 📸 Screenshots

<img width="1793" height="732" alt="image" src="https://github.com/user-attachments/assets/df7c222f-4ff5-4b4c-8a4b-508197008aca" />
<img width="1839" height="750" alt="image" src="https://github.com/user-attachments/assets/15ba9cb1-9c5d-4c06-92ea-a47e3b5124ce" />
<img width="1345" height="921" alt="image" src="https://github.com/user-attachments/assets/cd2a1e8e-12c5-4a8f-973f-cb086ff0bb5d" />



---

## 🎯 Future Improvements

* File upload (PDF / DOC)
* Summary length control
* Multi-language support
* Authentication system

---

## 👨‍💻 Author

* Your Name

---

## ⭐ Acknowledgements

* Hugging Face Transformers
* FastAPI
* React

---

## 📌 License

This project is for educational purposes.
