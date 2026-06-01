const button = document.getElementById("scroll-to-top-button");

function scrollToStart() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

button.addEventListener("click", scrollToStart);