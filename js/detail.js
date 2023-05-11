import { postsURL, loader } from "./components/fetch_posts.js";
import { message } from "./components/message.js";
const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");

const detailUrl = postsURL + "/" + id;

// fetch single post

async function getSinglePost() {
    try {
        const response = await fetch(detailUrl);
        const singlePost = await response.json();
        return singlePost
        
    } catch (error) {
        loader.innerHTML = message("error", error);
    }
  
}
getSinglePost()

const detailContainer = document.querySelector(".detail-container");
const pageTitle = document.querySelector("title");
const modal = document.querySelector(".modal");

function createDetailHtml(singlePost) {
    loader.innerHTML = ""
    const postTitle = singlePost.title.rendered;
    const postImage = singlePost.jetpack_featured_media_url;
    const postContent = singlePost.content.rendered;
    pageTitle.innerHTML += `3F blog | ${postTitle}`
    detailContainer.innerHTML += `<h1>${postTitle}</h1>
                                 <img class="detail_image" src="${postImage}" alt="${postTitle}">
                                 <div class="content">${postContent}</div>`
    // show Modal
    modal.innerHTML += `<img src="${postImage}" alt="${postTitle}">`
    const detailImage = document.querySelector(".detail_image");
    detailImage.onclick = function showModal() {
        modal.style.display = "block";
    }
}

// main
async function createHtml() {
    const singlePost = await getSinglePost();
    createDetailHtml(singlePost);
}
createHtml()

// close modal
function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}