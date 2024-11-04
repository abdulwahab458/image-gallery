console.log("hello")
const searchimage = document.getElementById("searchimage");
const imageform = document.getElementById("image-form");
const searchresult = document.getElementById("searchresult");
const showmore = document.getElementById("showmore");
const search = document.getElementById("search");

const access_key = "ktNxczJGqavGbhhhvIPm5ZGr-8kqGHyRR-ffqyI0Law"; 
let keyword ;
let page = 1;
async function getimages(){
    keyword = searchimage.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`
    let response = await fetch(url);
    let data = await response.json();
    
    let result = data.results;
    if(page===1){
        searchresult.innerHTML = "";
        
    }
    result.forEach(element => {
        const image = document.createElement("img");
        image.src = element.urls.small;
        image_link = document.createElement("a");
        image_link.href = element.links.html;
        image_link.appendChild(image);
        searchresult.appendChild(image_link);
        
    });
    showmore.style.display = "block";
}
imageform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    getimages();
})
showmore.addEventListener("click",()=>{
    page++;
    getimages();
})

