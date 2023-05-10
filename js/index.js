import { postsURL, loader } from "./components/fetch_posts.js";

const latestPostsBase = `?per_page=12`;
const latestPostsUrl = postsURL + latestPostsBase;

// Fetch 12 latest posts
async function getLatestPosts() {
    const response = await fetch(latestPostsUrl);
    const latestPosts = await response.json();
    return latestPosts

}
const slideOne = document.querySelector(".slide_one");
const slideTwo = document.querySelector(".slide_two");
const slideThree = document.querySelector(".slide_three");
const slideFour = document.querySelector(".slide_four");

// function checkMediaQuery(query) {
//     return window.matchMedia(query).matches;
// }

function createThumbnails(latestPosts) {
    loader.innerHTML = "";
    for (let i = 0; i < latestPosts.length; i++) {
        const postImage = latestPosts[i].jetpack_featured_media_url;
        const postName = latestPosts[i].title.rendered;
        const postID = latestPosts[i].id;
        const postsHtml = `<a href="detail.html?id=${postID}"><div>
                            <img src="${postImage}" alt="${postName}">
                            <h2>${postName}</h2>
                            </div></a>`
        if (i<4) {
            slideOne.innerHTML += postsHtml;
        } else if (i<8) {
            slideTwo.innerHTML += postsHtml;
        } else {
            slideThree.innerHTML += postsHtml;
        }
       
    }
   
}



async function createHtml() {
    const latestPosts = await getLatestPosts();
    createThumbnails(latestPosts);
    showSlide(currentSlide);
}
createHtml()

// Carousel
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".posts");
const totalSlides = slides.length;
let currentSlide = 0;

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");


function showSlide(slideNumber) {
    slides[currentSlide].classList.remove("active");
    slides[slideNumber].classList.add("active");
    currentSlide = slideNumber;
    nextButton.classList.add("active_button");
    previousButton.classList.add("active_button");
    if (currentSlide === totalSlides - 1) {
        nextButton.disabled = true;
        nextButton.classList.add("disable");
      } else {
        nextButton.disabled = false;
        nextButton.classList.remove("disable");
      }
    if (currentSlide === 0) {
        previousButton.disabled = true;
        previousButton.classList.add("disable");
       
    } else {
        previousButton.disabled = false;
        previousButton.classList.remove("disable");
    }
}

function showNextSlide() {
    let nextSlide = currentSlide + 1;
    showSlide(nextSlide);
}

nextButton.addEventListener("click", showNextSlide)

function showPreviousSlide() {
    let previousSlide = currentSlide - 1;
    showSlide(previousSlide);
}
previousButton.addEventListener("click", showPreviousSlide)