import Loader from './components/Loader.js'
import Router from './router.js'
const App = async ()=>{
    const $ROOT = document.getElementById('root') 
    const $Loader = document.createElement('div')
    const $style = document.createElement('style')
    $style.id='dynamic-styles'
    $Loader.appendChild(Loader()[0])
    const linkNode =document.querySelectorAll('link')
    let linkCss = Array.from(linkNode).filter(node => node.href.includes('main.css'))
    linkCss[0].insertAdjacentElement('afterend',$style)
    $ROOT.insertAdjacentElement('beforebegin',$Loader)
    await Router()
    $Loader.style.display='none'
}
export default App