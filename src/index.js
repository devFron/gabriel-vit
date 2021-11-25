import App from './App.js'
document.addEventListener('DOMContentLoaded',async(e)=>await App())
window.addEventListener('hashchange',async(e)=>await App())