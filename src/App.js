import Loader from './components/Loader.js'
import Router from './router.js'
const App = async ()=>{
    const $ROOT = document.getElementById('root') 
    const $Loader = document.createElement('div')
    $Loader.appendChild(Loader())
    $ROOT.insertAdjacentElement('beforebegin',$Loader)
    await Router()
    $Loader.style.display = 'none'
}
export default App