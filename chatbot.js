
const chatContainer = document.getElementById('chat-container');
const sendButton = document.getElementById('sendButton');

const chatData = [
  {
      question: 'Hello',
      answer: 'Hello! How can I help you?'
  },
  {
      question: 'What are your previous experiences?',
      answer: 'Having worked in the field of psychology, my front-end experience so far has only come from volunteer work and project-based development.'
  },
  {
      question: 'How did your psychology background influence your approach to front-end development?',
      answer: `My psychology background sets me apart in the tech world by giving me a unique perspective on user behavior and emotions. This knowledge helps me craft applications that not only function flawlessly but also appeal to users visually and emotionally, enhancing the overall user experience.
      `
  },
  {
      question: 'What courses have you been trained in?',
      answer: `I trained at CodeBerry School, The Odin Project and Harvard's CS50.`
  },

  {
      question: 'What programming skills do you have?',
      answer: 'Languages: HTML, CSS, JavaScript, React, Bootstrap. Frameworks: React, Bootstrap. Technologies: GitHub, Webpack, Npm.'
  },
  {
      question: 'What other skills do you have?',
      answer: 'My background in psychology makes me a good team player with excellent communication and conflict management skills.'
  },


  {
      question: 'What are your goals for the future?',
      answer: 'My future goals include becoming a full-stack developer and contributing to meaningful projects that make a positive impact.'
  }
];

function addChatEntry(sender, message, delay = 0, typingDelay = 80) {
  setTimeout(() => {
    const chatDiv = document.createElement('div');
    chatDiv.className = 'chat-entry';

    const senderSpan = document.createElement('span');
    senderSpan.className = 'sender';

    const messageSpan = document.createElement('span');
    messageSpan.className = 'message';

    chatDiv.appendChild(senderSpan);
    chatDiv.appendChild(messageSpan);
    chatContainer.appendChild(chatDiv);

    if (sender === 'Bot') {
      // For "Bot" responses, add typing animation for "Bot:" prefix and the message
      senderSpan.textContent = 'Bot:';
      const typingAnimation = () => {
        if (message.length > 0) {
          messageSpan.textContent += message.charAt(0);
          message = message.substring(1);
          setTimeout(typingAnimation, typingDelay);
        } else {
          chatDiv.classList.add('show');
        }
      };
      setTimeout(typingAnimation, 50);
    } else {
      senderSpan.textContent = 'You:';
      messageSpan.textContent = message;
      chatDiv.classList.add('show');
    }
  }, delay);
}

function getBotResponse(userQuestion) {
    userQuestion = userQuestion.toLowerCase().trim();

    for (const data of chatData) {
        if (userQuestion === data.question.toLowerCase()) {
            return data.answer;
        }
    }

    return "Sajnálom, nem értem a kérdésedet. Kérlek, válassz az alábbi lehetőségek közül: " + getChatOptions();
}

function getChatOptions() {
    let options = '';
    for (const data of chatData) {
        options += data.question + ', ';
    }
    return options.slice(0, -2); 
}

function sendMessage(userMessage) {
    addChatEntry('You', userMessage);

    const responseDelay = 500; 
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addChatEntry('Bot', botResponse, responseDelay);
    }, responseDelay);
}


