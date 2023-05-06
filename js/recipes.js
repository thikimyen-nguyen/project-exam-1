import { getPosts } from "./components/fetch_posts.js";

// main fetch
async function createRecipesHTML() {
    const posts = await getPosts();
    createThumbnails(posts);
}
createRecipesHTML();

// fetch first 10 posts
const recipesContainer = document.querySelector(".recipes_container");
const viewMoreButton = document.querySelector("#viewmore_button");

function createThumbnails(posts) {
    
   
    for (let i = 0; i < posts.length; i++) {
       
        const postImage = posts[i].jetpack_featured_media_url;
        const postName = posts[i].title.rendered;
        const postID = posts[i].id;
     
        recipesContainer.innerHTML += ` <a href="detail.html?id=${postID}"  class="thumbnail"><div>
                                        <img src="${postImage}" alt="${postName}">
                                        <h2>${postName}</h2>
                                        </div></a>`
    
       
    }
   
}

// fetch next 10 posts


