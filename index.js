// const slide = document.querySelector(".bgslide");  This had bug issues so I changed it

// let count = 1;

// function changeImg(){
//     console.log(count)
//     slide.style.backgroundImage = `url(/img/img${count}.jpg)`
// setTimeout(() => {
//     count++
// }, 1000);
//     if (count === 5){
//         count = 0;
//     }
// }

// setInterval(
//  changeImg, 3000);

const slideImg = document.querySelectorAll(".bgslide .slide-img");

const nextImageDelay = 4000;

let currentImageCounter = 0;

slideImg[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slideImg[tempCounter].style.opacity = 0;
    }, 1000);
    currentImageCounter = (currentImageCounter + 1) % slideImg.length;
    slideImg[currentImageCounter].style.opacity = 1;
}
