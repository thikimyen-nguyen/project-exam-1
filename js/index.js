import { postsURL, loader } from "./components/fetch_posts.js";

const latestPostsBase = `?per_page=12`;
const latestPostsUrl = postsURL + latestPostsBase;

async function getLatestPosts() {
    const response = await fetch(latestPostsUrl);
    const latestPosts = await response.json();
    return latestPosts

}
const posts = document.querySelector(".posts");

function createThumbnails(latestPosts) {
    loader.innerHTML = "";
    for (let i = 0; i < 4; i++) {
       
        const postImage = latestPosts[i].jetpack_featured_media_url;
        const postName = latestPosts[i].title.rendered;
        const postID = latestPosts[i].id;
     
        posts.innerHTML += ` <a href="detail.html?id=${postID}"><div>
                                        <img src="${postImage}" alt="${postName}">
                                        <h2>${postName}</h2>
                                        </div></a>`
    }
   
}


async function createHtml() {
    const latestPosts = await getLatestPosts();
    createThumbnails(latestPosts);
}
createHtml()