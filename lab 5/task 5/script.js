let images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('click', (event)=>{
        event.target.classList.toggle('nonactive');
    })
});

