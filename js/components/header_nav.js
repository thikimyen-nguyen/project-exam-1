const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector('.nav_list');
const hamburgerHtml = hamburger.innerHTML;
hamburgerHtml += `<div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>`
hamburger.onclick = function showNavList() {
    navList.style.display = "block";
}
