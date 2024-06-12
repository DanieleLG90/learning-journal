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

 function checkMediaQuery() {
    if (window.matchMedia('(max-width: 480px)').matches) {

        displayedObjects = plants.slice(0, 2)
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()
     
    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1200px)').matches) {

        displayedObjects = plants.slice(0, 2)
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()

    } else if(window.matchMedia('(min-width: 1280px)').matches){

        displayedObjects = plants.slice(0, 3)
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()
    }
  }

  window.addEventListener('resize', checkMediaQuery);
  checkMediaQuery();