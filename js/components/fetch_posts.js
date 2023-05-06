const baseAPI = "https://howareyounorway.no";
const baseAllPosts = "/wp-json/wp/v2/posts?per_page=100";
const postsURL = baseAPI + baseAllPosts;


async function getPosts() {
    const response = await fetch(postsURL);
    const posts = await response.json();
    console.log(posts);
    return posts;
}
export {getPosts}