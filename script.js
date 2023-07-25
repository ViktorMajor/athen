const cursor = document.querySelector(".bubble-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("ripple");

  setTimeout(() => {
    cursor.classList.remove("ripple");
  }, 800); // match the duration of the CSS animation
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

  // Calculate and log the percentage for each section
  let welcomePos = (welcome.offsetTop / bodyHeight) * 100;
  let aboutPos = (about.offsetTop / bodyHeight) * 100;
  let projectsPos = (projects.offsetTop / bodyHeight) * 100;
  let contactPos = (contactPage.offsetTop / bodyHeight) * 100;
  console.log(aboutPos);
  console.log(projectsPos);
  console.log(contactPos);

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

toggleCheckbox.addEventListener("change", function () {
  // dark mode
  if (this.checked) {
    document.body.style.backgroundColor = "#2d4356";
    miro.style.backgroundColor = "#2d4356";
    miro.style.color = "aliceblue";
    welcome.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.4), rgba(7, 25, 82, 0.5)), url("athen.png")';
    link.addEventListener("mouseover", () => {
      link.style.color = "white";
    });
  } else {
    //light mode
    welcome.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.1), rgba(7, 25, 82, 0.2)), url("athen.png")';

    miro.style.backgroundColor = "aliceblue";
    miro.style.color = "#2d4356";
    link.addEventListener("mouseout", () => {
      link.style.color = "#d97107"; 
    });
  }
});





