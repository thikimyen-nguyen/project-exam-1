import { getPosts, loader, postsURL } from "./components/fetch_posts.js";
import { message } from "./components/message.js";
import { createThumbnails } from "./components/thumbnails.js";

// main fetch
async function createRecipesHTML() {
    try {
        const posts = await getPosts();
        createThumbnails(posts);
        loader.innerHTML = "";
    } catch (error) {
        loader.innerHTML = message("error", error);
    }
   
}
createRecipesHTML();


const viewMoreButton = document.querySelector("#viewmore_button");


// fetch next 10 posts
let pageNumber = 2;
    
viewMoreButton.onclick = function createMorePosts() {
  
    async function getMorePosts() {
       
        const nextPageBase = `?per_page=10&page=${pageNumber}`;
        const nextPageUrl = postsURL + nextPageBase;
        const response = await fetch(nextPageUrl);
        const newPosts = await response.json();
        console.log(newPosts);
        pageNumber += 1;
        createThumbnails(newPosts);
    }
    getMorePosts();
}


