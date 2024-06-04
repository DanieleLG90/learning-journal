import { plants } from "./data.js";
const blogContainer = document.getElementById('blog-container')
const loadMore = document.getElementById('loadMore')

//console.log(plants)
let displayedObjects = plants.slice(0, 3);

function firstDisplayBlog (){
   // const firstThreeObjects = blogs.slice(0, 3);
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

loadMore.addEventListener('click', function(){
    if(displayedObjects.length < plants.length){
        displayedObjects = plants.slice(0, 6)
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()
        loadMore.textContent = 'View Less'
    } else{
        displayedObjects = plants.slice(0, 3)
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()
        loadMore.textContent = 'View More'
    }
    //displayedObjects = plants.slice(0, 6)
    //firstDisplayBlog()
   // blogContainer.innerHTML= firstDisplayBlog()
})

let testLength = displayedObjects + 3
console.log(testLength.length)
