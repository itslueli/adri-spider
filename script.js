document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.add('unlocked');
        alert(photo.getAttribute('data-description')); // Muestra el recuerdo desbloqueado
    });
});
