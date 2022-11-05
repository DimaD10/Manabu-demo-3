window.addEventListener('click', (event) => {
    if(event.target.dataset.action === 'show'){
        event.target.classList.toggle("spoiler__button-active");
        const spoiler = event.target.closest(".spoiler");
        const content = spoiler.querySelector('.spoiler__content');
        content.classList.toggle('spoiler-opened');
    }
});