import App from './App.js'
document.addEventListener('DOMContentLoaded',async(e)=>await App())
window.addEventListener('hashchange',async(e)=>await App())
document.addEventListener('click',(e)=>{
    if(e.target.matches('.button__enabled')){e.preventDefault()}
})