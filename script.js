let menu = document.querySelector('#menu');
let cross = document.querySelector('#cross');
let fullscreen = document.querySelector('#fullscreen');
let centerLinks = document.querySelector('#centerLinks');

menu.addEventListener('click', function(){
    fullscreen.style.left = '0';
    $('#centerLinks').animate({opacity: '1'}, 1000);
})

cross.addEventListener('click', function(){
    $('#centerLinks').animate({opacity: '0'}, 1000);
    setTimeout(function(){
        fullscreen.style.left = '-100%';
    }, 1000)
})