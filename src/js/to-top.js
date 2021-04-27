const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

toTop.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});