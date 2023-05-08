// header

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav_list');

hamburger.innerHTML += `<div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>`
navList.innerHTML += ` <li><a class="nav_link" href="index.html">Home</a></li>
                        <li><a class="nav_link" href="recipes.html">Recipes</a></li>
                        <li><a class="nav_link" href="about.html">About</a></li>
                        <li><a class="nav_link" href="contact.html">Contact</a></li>`
hamburger.onclick = function showNavList() {
    navList.style.display = "block";
}

const currentPageURL = window.location.href;


const navLinks = document.querySelectorAll(".nav_link");


for (let i = 0; i < navLinks.length; i++) {
    const navLinkUrl = navLinks[i].href;
   
    if (currentPageURL === navLinkUrl) {
        navLinks[i].classList.add("active_page");
      
    }
}
// footer
const footer = document.querySelector("footer");
footer.innerHTML += ` <div class="footer_content">
                        <img src="images/3f-low-resolution-logo-black-on-transparent-background.webp" alt="3f logo">
                        <div>
                            <p>For food review and advertisement:</p>
                            <p>Tel: 900 00 000</p>
                        </div>
                        </div>                
                        <p class="footer_ending">&copy; All rights reserved.</p> `



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

