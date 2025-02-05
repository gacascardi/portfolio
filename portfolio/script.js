document.querySelectorAll('.projeto-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelector('.projetos-grid').style.animationPlayState = 'paused';
    });

    card.addEventListener('mouseleave', () => {
        document.querySelector('.projetos-grid').style.animationPlayState = 'running';
    });
});