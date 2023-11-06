const arrows = document.querySelectorAll(".arrow");
const movieLİst = document.querySelectorAll(".movie-list");


console.log(movieLİst[0]);
arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageİtem = movieLİst[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        if (imageİtem - (4 + clickCounter) + (4 - widthRatio) >= 0) {

            clickCounter++;
            movieLİst[i].style.transform = `translateX(${movieLİst[i].computedStyleMap().get("transform")[0].x.value - 300}px)`

        } else {
            movieLİst[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

});

// ! DARK MODE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"))
});
