window.onscroll = () => {scroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("appear");
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.remove("appear");
    navbar.classList.add("hidden");
  }
}