const slide = document.querySelector(".bgslide");

let count = 1;

function changeImg(){
    console.log(count)
    slide.style.backgroundImage = `url(/img/img${count}.jpg)`
setTimeout(() => {
    count++
}, 1000);
    if (count === 5){
        count = 0;
    }
}

setInterval(
 changeImg, 3000);