const baseAPI = "https://howareyounorway.no";
const basePosts = "/wp-json/wp/v2/posts";
const postsURL = baseAPI + basePosts;


async function getPosts() {
    const response = await fetch(postsURL);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

// main fetch
async function createRecipesHTML() {
    const posts = await getPosts();
    createThumbnails(posts);
}
createRecipesHTML();

// fetch first 10 posts
const recipesContainer = document.querySelector(".recipes_container");
function createThumbnails(posts) {
    for (let i = 0; i < posts.length; i++) {
        const postImage = posts[i].jetpack_featured_media_url;
        const postName = posts[i].title.rendered;
        const postID = posts[i].id;
        console.log(postID);
        
        recipesContainer.innerHTML += ` <a href="detail.html?id=${postID}"  class="thumbnail"><div>
                                        <img src="${postImage}" alt="${postName}">
                                        <h2>${postName}</h2>
                                        </div></a>`
    }
}

// fetch next 10 posts
const viewMoreButton = document.querySelector("#viewmore_button");

