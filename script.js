const searchBox = document.querySelector('main input');

searchBox?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchBox.blur();
    }
});
