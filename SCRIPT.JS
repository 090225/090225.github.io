document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    if (card) {
        card.addEventListener('click', () => {
            card.classList.toggle('open');
        });
    } else {
        console.error('El elemento con id "card" no se encontró.');
    }
});
