import { plants } from "./data.js";
const blogContainer = document.getElementById('blog-container')

let displayedObjects = plants.slice(0, 3);

function firstDisplayBlog (){
     let emptyHtml =''
      displayedObjects.forEach(function(blog){
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
 
 blogContainer.innerHTML= firstDisplayBlog()