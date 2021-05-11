const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('sw.js')
        .then(registration => console.log('Service Worker installed'))
        .catch(err => 'SW registration failed'));
}

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})