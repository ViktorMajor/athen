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

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

window.addEventListener("scroll", function () {
  // A dokumentum teljes magassága
  let docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  let viewportHeight = window.innerHeight;

  // A görgetési pozíció
  let scrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

  // A viewport magasságának hozzáadása a scroll pozícióhoz
  let scrollBottomPosition = scrollPosition + viewportHeight;

  // A görgetési pozíció aránya a teljes oldalhoz
  let scrollRatio = scrollBottomPosition / docHeight;

  // A "border" szélességének beállítása
  document.querySelector("#scroll-border").style.transform =
    "scaleX(" + scrollRatio + ")";
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Get the elements
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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
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
      'linear-gradient(rgba(0, 0, 0, 0.4), rgba(7, 25, 82, 0.5)), url("athen.png")';
    contactPage.style.color = "aliceblue";
  } else {
    //light mode
    document.body.style.backgroundColor = "aliceblue";
    Array.from(messageButtons).forEach((button) => {
      button.style.color = "#2d4356";
    });
    welcome.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.1), rgba(7, 25, 82, 0.2)), url("athen.png")';
    miro.style.backgroundColor = "aliceblue";
    miro.style.color = "#2d4356";
    contactPage.style.color = "#2d4356";
  }
});
