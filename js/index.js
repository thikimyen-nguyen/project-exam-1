import { postsURL } from "./components/fetch_posts.js";
import { createThumbnails } from "./components/thumbnails.js";
const latestPostsBase = `?per_page=12`;
const latestPostsUrl = postsURL + latestPostsBase;

async function getLatestPosts() {
    const response = await fetch(latestPostsUrl);
    const latestPosts = await response.json();
    console.log(latestPosts);
    return latestPosts

}



async function createHtml() {
    const latestPosts = await getLatestPosts();
    createThumbnails(latestPosts);
}
createHtml()