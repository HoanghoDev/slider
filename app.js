let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails =  document.querySelectorAll('.thumbnail .item');

// step 1: config param
let countItem = items.length;
let itemActive = 0;

next.onclick = function (){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function (){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function showSlider(){
    // remove item active old
    let findItemActiveOld = document.querySelector('.slider .list .item.active');
    let findthumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    findItemActiveOld.classList.remove('active');
    findthumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // auto run
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}
// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', ()=>{
        itemActive = index;
        showSlider();
    })
})