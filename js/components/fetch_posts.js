const baseAPI = "https://howareyounorway.no";
const baseAllPosts = "/wp-json/wp/v2/posts";
const postsURL = baseAPI + baseAllPosts;
const loader = document.querySelector(".loader");


async function getPosts() {
    const response = await fetch(postsURL);
    const posts = await response.json();
    console.log(posts);
    return posts;
}
export {getPosts, loader, postsURL}