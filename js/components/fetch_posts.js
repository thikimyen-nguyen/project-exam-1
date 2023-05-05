const baseAPI = "https://howareyounorway.no";
const basePosts = "/wp-json/wp/v2/posts";
const postsURL = baseAPI + basePosts;


async function getPosts() {
    const response = await fetch(postsURL);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

const recipesContainer = document.querySelector(".recipes_container");
function createThumbnails(posts) {
    for (let i = 0; i < posts.length; i++) {
        const postImage = posts[i].jetpack_featured_media_url;
        const postName = posts[i].title.rendered;
        
        recipesContainer.innerHTML += `<div>
                                        <img src="${postImage}" alt="${postName}">
                                        <h3>${postName}</h3>
                                        </div>`
    }
}

// main fetch
async function createRecipesHTML() {
    const posts = await getPosts();
    createThumbnails(posts);
}
createRecipesHTML();
