const chatContainer = document.getElementById("chat-container");
const answerContainer = document.getElementById("answer-container");
const sendButton = document.getElementById("sendButton");


const chatData = [
  {
    question: "Hello!",
    answer: `Hello! My name is Viktor Major. Thank you for contacting me. What are you curious about?`,
  },
  {
    question:
      "Can you tell me about your previous experiences as a front-end developer?",
    answer: `So far I've been working on my own projects, most of which can be found on my public github page and some of which are in this protfolio. I'm also working on another portfolio site for a friend who runs an engraving business. This is a close collaboration for which I am already getting paid. `,
  },
  {
    question:
      "How does your psychological background influence your approach to front-end development?",
    answer: `My knowledge of psychology is most useful in running workplace systems and dealing with clients. Or, in the longer term, it gives me the opportunity to specialise in the development of psychology-related applications.`,
  },
  {
    question:
      "What other relevant skills do you have?",
    answer:
      "I am a good team player because of my strong soft skills. (Communication skills,kindness, assertiveness, etc.) and one of my most important and characteristic qualities is curiosity, which helps a lot in everyday life.",
  },

  {
    question: "What motivates you as a front-end developer?",
    answer: `My main motivation is creation and the resulting positive impact
    which I can exercise on users. Creating intuitive and attractive interfaces gives me satisfaction. Also, the ever-evolving nature of technology motivates me to be curious and improve my skills.`,
  },

  {
    question:
      "Where do you see yourself in five years in terms of your front-end development career?",
    answer:
      "In five years, I imagine myself as a senior front-end developer, leading and mentoring a team of good developers. As for projects, I would like to be able to work on an application that can help people with the help of AI, either as an entrepreneur or otherwise for example, in maintaining their mental health.I also created a rudimentary application on this topic that evaluates psychological tests.",
  },

 
  {
    question:
      "How can I contact you?",
    answer:
      "Email me at the bottom of the page or find me on social media."
  },
 
];

function addChatEntry(sender, message, delay = 0, typingDelay = 40) {
  setTimeout(() => {
    const chatDiv = document.createElement("div");
    chatDiv.className = "chat-entry";

    const senderSpan = document.createElement("span");
    senderSpan.className = "sender";

    const messageSpan = document.createElement("span");
    messageSpan.className = "message";

    chatDiv.appendChild(senderSpan);
    chatDiv.appendChild(messageSpan);
    answerContainer.appendChild(chatDiv);

    if (sender === "Viktor") {
      senderSpan.innerHTML =`<img src="pictures/profile.jpeg" alt = "profile">`;
      const typingAnimation = () => {
        if (message.length > 0) {
          messageSpan.textContent += message.charAt(0);
          message = message.substring(1);
          setTimeout(typingAnimation, typingDelay);
        } else {
          chatDiv.classList.add("show");
        }
      };
      setTimeout(typingAnimation, 40);
    } else {
      senderSpan.innerHTML =`<p>You</p>`;
      messageSpan.textContent = message;
      chatDiv.classList.add("show");
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


}
function sendMessage(userMessage) {
  addChatEntry("You", userMessage);

  const responseDelay = 200;
  setTimeout(() => {
    const botResponse = getBotResponse(userMessage);
    addChatEntry("Viktor", botResponse, responseDelay);
  }, responseDelay);
}
