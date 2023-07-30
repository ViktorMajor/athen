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

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = -100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const toggleCheckbox = document.querySelector(".toggle-checkbox");
const socialLinks = document.querySelectorAll(".social-links a");
const contactPage = document.querySelector(".contact-page");
const messageButtons = document.querySelectorAll(".messageButton");
const projectName = document.querySelectorAll(".project-name");
const body = document.body;
const welcome = document.getElementById("welcome");
const miro = document.getElementById("miro");

toggleCheckbox.addEventListener("change", function () {
  const darkMode = this.checked;

  if (darkMode) {
    // Dark mode
    body.style.backgroundColor = "#182836";
    socialLinks.forEach((link) => (link.style.color = "aliceblue"));
    messageButtons.forEach((button) => (button.style.color = "aliceblue"));
    projectName.forEach((h1) => (h1.style.color = "#182836"));

    miro.style.color = "aliceblue";
    miro.style.backgroundColor = "#182836";
    welcome.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.4), rgba(7, 25, 82, 0.7)), url("pictures/athen1.png")';
    contactPage.style.color = "aliceblue";
  } else {
    // Light mode
    body.style.backgroundColor = "aliceblue";
    socialLinks.forEach((link) => (link.style.color = "#182836"));
    messageButtons.forEach((button) => (button.style.color = "#182836"));
    welcome.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.2), rgb(24 40 54 / 40%)), url("pictures/athen1.png")';
    miro.style.backgroundColor = "aliceblue";
    miro.style.color = "#182836";
    contactPage.style.color = "#182836";
  }
});

const projectCards = document.querySelectorAll(".project-card");
const projectImages = document.querySelectorAll(".project-image");
const projectDescriptions = document.querySelectorAll(".project-description");

projectCards.forEach((projectCard, index) => {
  projectCard.addEventListener("click", function () {
    setTimeout(() => {
      projectDescriptions[index].style.display = "block";
    }, 289);
    projectImages[index].style.maxHeight = "0"; 
  });

  projectCard.addEventListener("mouseleave", function () {
    projectImages[index].style.maxHeight = "200px"; 
    projectDescriptions[index].style.display = "none"; 
  });
});

const message = document.querySelectorAll(".messageButton");
message.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    clickedButton.style.backgroundColor = "#93a1bd";
    clickedButton.style.color = "aliceblue";
  });
});

const imagesWithText = document.querySelectorAll(".skillset img + p");
imagesWithText.forEach((image) => {
  image.previousElementSibling.addEventListener("mouseenter", () => {
    image.style.display = "block";
  });

  image.previousElementSibling.addEventListener("mouseleave", () => {
    image.style.display = "none";
  });
});
