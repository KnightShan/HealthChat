from flask import Flask, render_template, jsonify, request
from src.helper import download_hugging_face_embeddings
from langchain_pinecone import PineconeVectorStore
from langchain_groq import ChatGroq
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from src.prompt import *
import os
import markdown

app = Flask(__name__)

os.environ["PINECONE_API_KEY"] = "pcsk_4xXRWe_9UaJ3zKi9JcvVB7BqPLBBGaZe5HNm5R4RoXxGZNcKpTNdJV3ZCFq3Gv36TGZvuz"
os.environ["GROQ_API_KEY"] = "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"

embeddings = download_hugging_face_embeddings()

index_name = "healthcarebot"

docsearch = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embeddings
)

retriever = docsearch.as_retriever(search_type="similarity", search_kwargs={"k": 3})

llm = ChatGroq(
    api_key=os.environ["GROQ_API_KEY"],
    model="openai/gpt-oss-20b",
    temperature=0.3,
    max_tokens=2048,
)

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system_prompt),
        ("human", "{input}")
    ]
)

question_answer_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, question_answer_chain)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/get", methods=["GET", "POST"])
def chat():
    try:
        msg = request.form["msg"]
        response = rag_chain.invoke({"input": msg})
        
        answer = response["answer"]
        html_answer = markdown.markdown(
            answer,
            extensions=['tables', 'fenced_code', 'nl2br']
        )
        
        return html_answer
    except Exception as e:
        print(f"Error: {str(e)}")
        return "I apologize, but I encountered an error processing your request. Please try again.", 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True)