import { getPosts, loader, postsURL } from "./components/fetch_posts.js";
import { message } from "./components/message.js";


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
const recipesContainer = document.querySelector(".recipes_container");

function createThumbnails(posts) {
   
    for (let i = 0; i < posts.length; i++) {
       
        const postImage = posts[i].jetpack_featured_media_url;
        const postName = posts[i].title.rendered;
        const postID = posts[i].id;
     
        recipesContainer.innerHTML += ` <a href="detail.html?id=${postID}"  class="thumbnail"><div>
                                        <img src="${postImage}" alt="${postName}">
                                        <p>${postName}</p>
                                        </div></a>`
    
       
    }
   
}

const viewMoreButton = document.querySelector("#viewmore_button");


// fetch next 10 posts
let pageNumber = 2;
    
viewMoreButton.onclick = function createMorePosts() {
  
    async function getMorePosts() {
        try {
        const nextPageBase = `?per_page=10&page=${pageNumber}`;
        const nextPageUrl = postsURL + nextPageBase;
        const response = await fetch(nextPageUrl);
        const newPosts = await response.json();
        createThumbnails(newPosts);
        viewMoreButton.style.display = "none";
     
        } catch (error) {
            loader.innerHTML = message("error", error);
        }
    }
    getMorePosts();
}


