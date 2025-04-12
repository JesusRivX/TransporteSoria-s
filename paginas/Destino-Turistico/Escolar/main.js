let items = document.querySelectorAll('.slider .list .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

function autoRunSlider() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}

let refreshInterval = setInterval(autoRunSlider, 5000);

// Click en thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

