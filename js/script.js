const wishlistIcon = document.querySelectorAll(".home__like");

wishlistIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("home__like--active");
  });
});
