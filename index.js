import { plants } from "./data.js";
const blogContainer = document.getElementById('blog-container')

//console.log(plants)

function firstDisplayBlog (blogs){
    let emptyHtml =''
     blogs.forEach(function(blog){
        emptyHtml += `<div class="blog">
                    <img src='${blog.img}' alt="${blog.titolo} plant">
                    <h3>${blog.date}</h3>
                    <h2>${blog.titolo}</h2>
                    <p>
                        ${blog.descrizione}
                    </p>
                    <button>Read more</button>
                </div>`
    });
    return emptyHtml
}

blogContainer.innerHTML= firstDisplayBlog(plants)