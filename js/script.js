// header
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav_list');
hamburger.innerHTML += `<div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>`
navList.innerHTML += ` <li><a href="index.html">Home</a></li>
                        <li><a href="recipes.html">Recipes</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>`
hamburger.onclick = function showNavList() {
    navList.style.display = "block";
}

// const url = " https://howareyounorway.no/wp-json/wp/v2/posts/65";

// async function getPost() {
//     const response = await fetch(url);
//     const posts = await response.json();
//     console.log(posts);
//     return posts

// }

//   const postContainer = document.querySelector(".post-container");
// function html(posts) {
    
//    console.log(posts.jetpack_featured_media_url);
//    const image = posts.jetpack_featured_media_url;
//    const postName = posts.title.rendered;
//     postContainer.innerHTML = `
//     <h2>${postName}</h2>
//     <img src="${image}" alt="${postName}">
//     ${posts.content.rendered}
//   `;
// }
// async function createHtml() {
//     const posts = await getPost();
//     html(posts)
// }
// createHtml();

