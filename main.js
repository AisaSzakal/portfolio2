const card = document.querySelector('.card__inner');

card.addEventListener('click', function(event){
    if (event.target.tagName !== 'A') { // Check if the clicked element is not a link
        card.classList.toggle('is-flipped');
    }
});