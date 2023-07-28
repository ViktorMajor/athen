const chatContainer = document.getElementById("chat-container");
const sendButton = document.getElementById("sendButton");

const chatData = [
  {
    question: "Hello!",
    answer: `Hello! My name is Viktor Major. Thank you for contacting me. What are you curious about?`,
  },
  {
    question:
      "Can you tell me about your previous experiences as a front-end developer?",
    answer: `Certainly! I have been involved in front-end development through various volunteer projects and have completed training at CodeBerry School, The Odin Project, and Harvard's CS50. These experiences have provided me with a strong foundation in HTML, CSS, and JavaScript, along with expertise in using popular frameworks like React and Bootstrap.`,
  },
  {
    question:
      "How has your background in psychology influenced your approach to front-end development?",
    answer: `My background in psychology has been a valuable asset in my front-end development journey. Understanding user behavior and emotions allows me to create user-centric interfaces that not only function seamlessly but also resonate with users on a deeper level. By prioritizing the user experience, I aim to craft applications that are not only visually appealing but also emotionally engaging, thus leaving a lasting positive impact on users.`,
  },
  {
    question:
      "Apart from technical skills, do you possess any other relevant skills?",
    answer:
      "Absolutely! My psychology background has cultivated strong communication and collaboration skills, making me an effective team player. I believe in open and transparent communication within the team, which leads to better problem-solving and project outcomes. Additionally, my conflict management skills help foster a positive and productive work environment.",
  },

  {
    question:
      "How do you stay updated with the latest trends and advancements in front-end development?",
    answer:
      "Continuous learning is crucial in the fast-paced world of front-end development. I regularly follow industry blogs. I enjoy exploring new technologies and experimenting with different tools to enhance my skills.",
  },


  {
    question: "What motivates you as a front-end developer?",
    answer: `As a front-end developer, my main motivation comes from the positive impact I can make on users' lives through my work. Creating intuitive and visually appealing interfaces that enhance user experiences brings me immense satisfaction. Additionally, the ever-evolving nature of technology keeps me motivated to stay curious and continuously improve my skills.`,
  },
  {
    question: "How do you handle  stressful situations?",
    answer: `To manage stress, I break down complex projects into smaller achievable tasks, which helps me stay focused and organized. Additionally, I maintain open communication with the team to address challenges assertive and ensure we are collectively working towards meeting the project's goals.`,
  },

  {
    question:
      "Where do you see yourself in five years in terms of your front-end development career?",
    answer:
      "In five years, I envision myself as a senior front-end developer, leading and mentoring a team of passionate developers. I aspire to be actively involved in innovative projects that push the boundaries of web development and create meaningful solutions for users. Additionally, I plan to contribute to the tech community by sharing my knowledge and experiences through workshops and conferences.",
  },

  {
    question:
      "What projects or technologies would you like to learn more about?",
    answer:
      "I know that I still have to improve a lot in frontend development, but it gives me great excitement, and in the long term, I want to get there so that AI makes the life of ordinary people significantly easier through useful applications."
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
    chatContainer.appendChild(chatDiv);

    if (sender === "Viktor") {
      senderSpan.textContent = "Viktor";
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
      senderSpan.textContent = "You";
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
