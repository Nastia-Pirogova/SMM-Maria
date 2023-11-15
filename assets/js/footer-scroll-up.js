const scrollToTop = document.querySelector(".footer-inner__top-button");
scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
