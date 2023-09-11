const navbar = document.querySelector("#nav");
// const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("bg-primary");
    console.log(navbar.classList);
  } else {
    navbar.classList.remove("bg-primary");
    console.log(navbar.classList);
  }

  //   setup back to top link
});
