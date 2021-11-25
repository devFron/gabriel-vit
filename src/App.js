import Loader from './components/Loader.js'
import Router from './router.js'
const App = async ()=>{
    const $ROOT = document.getElementById('root') 
    const $Loader = Loader()
    $ROOT.appendChild($Loader)
    await Router()
    $ROOT.removeChild($Loader)
}
export default App