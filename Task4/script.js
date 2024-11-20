// Select the elements using class selectors
const header = document.querySelector('.header');
const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    header.classList.toggle('color');
})