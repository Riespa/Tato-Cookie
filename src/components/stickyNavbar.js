const navbar = document.getElementById("navbar");
const imageHeight = document.getElementById("banner-image").clientHeight;
const navbarContainer = document.querySelector(".navbar-container");
const navbarOffsetTop = navbar.offsetTop;

function addStickyClass() {
  navbar.classList.add("sticky");
}

function removeStickyClass() {
  navbar.classList.remove("sticky");
}

function addSolidClass() {
  navbarContainer.style.top = `${imageHeight}px`;
  navbar.classList.add("solid");
}

function removeSolidClass() {
  navbarContainer.style.top = "0";
  navbar.classList.remove("solid");
}

function stickyNavbar() {
  if (window.pageYOffset >= navbarOffsetTop) {
    addStickyClass();
  } else {
    removeStickyClass();
  }

  if (window.pageYOffset >= imageHeight) {
    addSolidClass();
  } else {
    removeSolidClass();
  }
}

window.addEventListener("scroll", stickyNavbar);