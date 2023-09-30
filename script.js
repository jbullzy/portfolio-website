const cvItems = document.querySelectorAll('.cv-item');

cvItems.forEach((item) => {
    item.addEventListener('click', () => {
        const description = item.querySelector('.cv-description')

        if (description.style.display === 'block') {
            description.style.display = 'none';
        } else {
            description.style.display = 'block';
        }

        console.log('Clicked!');
    });
});
