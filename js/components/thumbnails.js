const recipesContainer = document.querySelector(".recipes_container");

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
export {recipesContainer, createThumbnails}