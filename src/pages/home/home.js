import Header from '../../components/Header.js'
const Home = ()=>{
    const $Home = document.createElement('section')
    const $style = document.getElementById('dynamic-styles')
    const style = `
        body{
            background:url(../src/assets/background-mobile.png);
        }
        ${Header().componnetStyles}
        @media screen and (min-width:700px){
            body{
                background:url(../src/assets/background-desktop.png);
            }
        }
    `
    $style.innerHTML = ''
    $style.innerHTML = style
    $Home.appendChild(Header().componnet)

    return $Home
}
export default Home