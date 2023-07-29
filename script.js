var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});




window.addEventListener("scroll", function () {
  let docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  let viewportHeight = window.innerHeight;

  let scrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

  let scrollBottomPosition = scrollPosition + viewportHeight;

  let scrollRatio = scrollBottomPosition / docHeight;

  document.querySelector("#scroll-border").style.transform =
    "scaleX(" + scrollRatio + ")";
});

window.addEventListener("DOMContentLoaded", (event) => {
  const welcome = document.querySelector(".welcome");
  const about = document.querySelector(".about");
  const projects = document.querySelector(".projects");
  const contactPage = document.querySelector(".contact-page");

  const bodyHeight = document.body.scrollHeight;

  let welcomePos = (welcome.offsetTop / bodyHeight) * 100;
  let aboutPos = (about.offsetTop / bodyHeight) * 100;
  let projectsPos = (projects.offsetTop / bodyHeight) * 100;
  let contactPos = (contactPage.offsetTop / bodyHeight) * 100;

  const welcomeA = document.getElementById("welcome-a");
  const aboutA = document.getElementById("about-a");
  const projectsA = document.getElementById("projects-a");
  const contactA = document.getElementById("contacts-a");

  welcomeA.style.width = `${aboutPos}%`;
  aboutA.style.width = `${projectsPos - aboutPos}%`;
  projectsA.style.width = `${contactPos - projectsPos}%`;
  contactA.style.width = `${100 - contactPos}%`;
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const targetId = link.getAttribute('href').substring(1); 

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = -100; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});



const toggleCheckbox = document.querySelector(".toggle-checkbox");
const link = document.querySelector(".social-links a");
const contactPage = document.querySelector(".contact-page");
const messageButtons = document.getElementsByClassName("messageButton");
toggleCheckbox.addEventListener("change", function () {
  // dark mode
  if (this.checked) {
    document.body.style.backgroundColor = "#2d4356";
    Array.from(messageButtons).forEach((button) => {
      button.style.color = "aliceblue";
    });

    miro.style.color = "aliceblue";
    miro.style.backgroundColor = "#2d4356";
    welcome.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.4), rgba(7, 25, 82, 0.7)), url("pictures/athen1.png")';
    contactPage.style.color = "aliceblue";
  } else {
    //light mode
    document.body.style.backgroundColor = "aliceblue";
    Array.from(messageButtons).forEach((button) => {
      button.style.color = "#2d4356";
    });
    welcome.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.2), rgba(7, 25, 82, 0.4)), url("pictures/athen1.png")';
    miro.style.backgroundColor = "aliceblue";
    miro.style.color = "#2d4356";
    contactPage.style.color = "#2d4356";
  }
});

const message = document.querySelectorAll(".messageButton");

message.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    clickedButton.style.backgroundColor = "#93a1bd";
    clickedButton.style.color = "aliceblue";
  });
});

const imagesWithText = document.querySelectorAll('.skillset img + p');

// Attach event listeners to each image
imagesWithText.forEach((image) => {
  // Show the text when the mouse enters the image
  image.previousElementSibling.addEventListener('mouseenter', () => {
    image.style.display = 'block';
  });

  // Hide the text when the mouse leaves the image
  image.previousElementSibling.addEventListener('mouseleave', () => {
    image.style.display = 'none';
  });
});
