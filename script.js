// Enable hidden nav bar
{
  const header = document.querySelector(".entire-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      header.classList.add("entire-header--hidden");
    } else {
      header.classList.remove("entire-header--hidden");
    }

    lastScrollY = window.scrollY;
  });
}
