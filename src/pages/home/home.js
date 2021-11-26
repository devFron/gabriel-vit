import Header from '../../components/Header.js'
const Home = ()=>{
    const $Home = document.createElement('section')
    const $style = document.getElementById('dynamic-styles')
    const style = `
        ${Header().componnetStyles}
    `
    $style.innerHTML = ''
    $style.innerHTML = style
    $Home.appendChild(Header().componnet)

    return $Home
}
export default Home