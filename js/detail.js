import { postsURL, loader } from "./components/fetch_posts.js";
import { message } from "./components/message.js";
const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");
console.log(id);

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
function createDetailHtml(singlePost) {
    loader.innerHTML = ""
    const detailTitle = singlePost.title.rendered;
    const detailImage = singlePost.jetpack_featured_media_url;
    const detailContent = singlePost.content.rendered;
    pageTitle.innerHTML += `3F blog | ${detailTitle}`;
    detailContainer.innerHTML += `<h1>${detailTitle}<hr></h1>
                                    <img src="${detailImage}" alt="${detailTitle}">
                                    <div class="content">${detailContent}</div>
                                    `
}

// main
async function createHtml() {
    const singlePost = await getSinglePost();
    createDetailHtml(singlePost);
}
createHtml()

// create modal
