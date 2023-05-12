const button = document.getElementById("button");
const scores = document.querySelectorAll("input[name='score']");
const userRating = document.getElementById("user-rating");
const ratingSection = document.querySelector(".rating");
const thankYouSection = document.querySelector(".thankyou");
const errorMessage = document.querySelector(".error");





button.addEventListener("click", function() {
    for (let score of scores) {
        if(score.checked) {
            userRating.textContent = score.value;
            ratingSection.style.display = 'none';
            thankYouSection.style.display = 'block';
            break;
        } else {
            errorMessage.style.opacity = '1';
        }
    };
});