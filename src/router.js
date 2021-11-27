import Home from './pages/home/home.js'
import Styles from './helpers/vit.js'
import Loader from './components/Loader.js'
const Router = async ()=>{
    const {hash} = location
    const $Root = document.getElementById('root')
    const title = document.querySelector('title')
    const $style = document.getElementById('dynamic-styles')
    $Root.innerHTML=''
    $style.innerHTML = Loader()[1].mobile
    if(!hash.includes('#/skill')){ 
        switch (hash) {
            case '':
                const [componentHome,stylesHome] = Home()
               $Root.appendChild(componentHome)
               $style.innerHTML += Styles(stylesHome)
               title.textContent = 'Inicio'
            break;

            case '#/home':
                $Root.appendChild(Home())
                title.textContent = 'Inicio'
            break;
       
           default:
            break;
        }
    }else{

        console.log('skills')
    }

}
export default Router