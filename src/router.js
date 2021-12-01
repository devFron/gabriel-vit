import Home from './pages/home/home.js'
import Styles from './helpers/vit.js'
import Loader from './components/Loader.js'
import SkillOne from './pages/skills/skill-one/skill_one.js'
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
        const HashBase = '#/skill/'
        switch (hash) {
            case `${HashBase}huddle-landing-page-with-single-introductory-section-master`:
                const [componentSkillOne,stylesSkillOne] = SkillOne()
                $Root.appendChild(componentSkillOne)
                $style.innerHTML += Styles(stylesSkillOne)
                title.textContent = 'skill | huddle-landing-page-with-single-introductory-section-master'
            break;
        
            default:
            break;
        }
    }

}
export default Router