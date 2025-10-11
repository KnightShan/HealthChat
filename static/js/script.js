const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

function addMessage(message, isUser) {
    const welcomeMsg = chatMessages.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? 'U' : 'H';
    
    const content = document.createElement('div');
    content.className = 'message-content';

    if (isUser) {
        content.textContent = message;
    } else {
        content.innerHTML = message;
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typingIndicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = 'H';
    
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.style.display = 'flex';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(indicator);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    userInput.value = '';
    sendButton.disabled = true;
    
    showTypingIndicator();

    try {
        const formData = new FormData();
        formData.append('msg', message);

        const response = await fetch('/get', {
            method: 'POST',
            body: formData
        });

        const data = await response.text();
        hideTypingIndicator();
        addMessage(data, false);
    } catch (error) {
        hideTypingIndicator();
        addMessage('Sorry, I encountered an error. Please try again later.', false);
    } finally {
        sendButton.disabled = false;
        userInput.focus();
    }
}

sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

userInput.focus();