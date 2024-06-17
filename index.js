import { plants } from "./data.js";
const blogContainer = document.getElementById('blog-container')
const loadMore = document.getElementById('loadMore')


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

function checkMediaQuery() {
    if (window.matchMedia('(max-width: 480px)').matches) {

        displayedObjects = plants.slice(0, 3)
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()
        loadMore.style.display = 'block'
     
    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1200px)').matches) {

        displayedObjects = plants.slice(0, 4)
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()
        loadMore.style.display = 'block'

    } else if(window.matchMedia('(min-width: 1280px)').matches){

        displayedObjects = plants
        firstDisplayBlog ()
        blogContainer.innerHTML= firstDisplayBlog()
        loadMore.style.display = 'none'

    }
}

window.addEventListener('resize', checkMediaQuery);
checkMediaQuery();

loadMore.addEventListener('click', function(){
    if (window.matchMedia('(max-width: 480px)').matches){

        if(displayedObjects.length < plants.length){
            displayedObjects = plants.slice(0, 6)
            firstDisplayBlog ()
            blogContainer.innerHTML= firstDisplayBlog()
            loadMore.textContent = 'View Less'
        } else {
            displayedObjects = plants.slice(0, 3)
            firstDisplayBlog ()
            blogContainer.innerHTML= firstDisplayBlog()
            loadMore.textContent = 'View More'
        }

    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1200px)').matches){

        if(displayedObjects.length < plants.length){
            displayedObjects = plants
            firstDisplayBlog ()
            blogContainer.innerHTML= firstDisplayBlog()
            loadMore.textContent = 'View Less'
        } else{
            displayedObjects = plants.slice(0, 4)
            firstDisplayBlog ()
            blogContainer.innerHTML= firstDisplayBlog()
            loadMore.textContent = 'View More'
        }
    }
})


const mainBtn = document.getElementById('main');
mainBtn.addEventListener('click', function() {
window.location.href = 'blog.html';
});