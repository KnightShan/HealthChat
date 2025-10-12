# CHATHEALTH - AI-Powered Healthcare Chatbot

A sophisticated healthcare chatbot built with Flask, LangChain, and Pinecone that provides intelligent medical assistance using RAG (Retrieval-Augmented Generation) technology.

## 🚀 Features

- **AI-Powered Medical Assistance**: Uses Groq's GPT-OSS-20B model for intelligent medical responses
- **Vector Search**: Leverages Pinecone for efficient document retrieval and similarity search
- **RAG Architecture**: Combines retrieval and generation for accurate, context-aware responses
- **Modern Web Interface**: Clean, responsive UI built with HTML, CSS, and JavaScript
- **Medical Knowledge Base**: Processes medical handbooks and documents for accurate information

## 🛠️ Tech Stack

- **Backend**: Flask (Python)
- **AI/ML**: LangChain, Groq API
- **Vector Database**: Pinecone
- **Embeddings**: Hugging Face Transformers
- **Frontend**: HTML, CSS, JavaScript
- **Document Processing**: PDF processing for medical handbooks

## 📋 Prerequisites

- Python 3.8+
- Pinecone API key
- Groq API key
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/CHATHEALTH.git
   cd CHATHEALTH
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PINECONE_API_KEY=your_pinecone_api_key
   GROQ_API_KEY=your_groq_api_key
   ```

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
CHATHEALTH/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── setup.py              # Package setup
├── environment.yml       # Conda environment
├── src/
│   ├── helper.py         # Helper functions for embeddings
│   └── prompt.py         # System prompts for the chatbot
├── templates/
│   └── index.html        # Main web interface
├── static/
│   ├── css/
│   │   └── style.css     # Styling
│   └── js/
│       └── script.js     # Frontend JavaScript
├── Data/
│   └── medicalhandbook.pdf  # Medical knowledge base
└── vector_index.py       # Vector indexing utilities
```

## 🔑 API Keys Setup

### Pinecone Setup
1. Sign up at [Pinecone](https://www.pinecone.io/)
2. Create a new project and index named "healthcarebot"
3. Copy your API key to the `.env` file

### Groq Setup
1. Sign up at [Groq](https://console.groq.com/)
2. Generate an API key
3. Copy your API key to the `.env` file

## 🚀 Usage

1. Start the Flask application
2. Open your web browser
3. Type your medical questions in the chat interface
4. Get AI-powered responses based on medical knowledge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This chatbot is for informational purposes only and should not replace professional medical advice. Always consult with qualified healthcare professionals for medical concerns.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ for better healthcare accessibility