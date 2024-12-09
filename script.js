let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.sect')
let items = container.querySelectorAll('.item .carrosel')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1
let interval; 

nextButton.onclick = () => {
    let itemOld = container.querySelector('.item .carrosel.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')
    resetInterval(); 
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.item .carrosel.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')
    resetInterval(); 
}


function autoSlide() {
    nextButton.onclick();
}


function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 5000); 
}


interval = setInterval(autoSlide, 5000);
