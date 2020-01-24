'use strict';

{
    const images = [
        'img/spring_1.jpg',
        'img/spring_2.jpg',
        'img/summer_1.jpg',
        'img/summer_2.jpg',
        'img/autumn_1.jpg',
        'img/autumn_2.jpg',
        'img/winter_1.jpg',
        'img/winter_2.jpg',
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if (index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');

        });

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        let target = currentIndex + 1 ;
        if (target === images.length) {
            target = 0;

        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });
    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if (target < 0) {
            target = images.length - 1;

        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeoutId;


    function playSlideshow() {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 2000);
    }
   
let isPlaying = false;


    const play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (isPlaying === false) {
            playSlideshow();
            play.textContent = 'Pause';
        } else {
            clearTimeout(timeoutId);
            play.textContent = 'Play';
        }

        isPlaying = !isPlaying;

    });




}

