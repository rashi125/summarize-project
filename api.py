from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from main import extractive_summary, abstractive_summary

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

@app.post("/summarize")
def summarize(data: TextRequest):
    text = data.text

    return {
        "extractive_summary": extractive_summary(text),
        "abstractive_summary": abstractive_summary(text)
    }