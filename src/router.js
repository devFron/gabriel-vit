import Home from './pages/home/home.js'
const Router = async ()=>{
    const {hash} = location
    const $Root = document.getElementById('root')
    const title = document.querySelector('title')
    $Root.innerHTML=''    
    if(!hash.includes('#/skill')){ 
        switch (hash) {
            case '':
               $Root.appendChild(Home())
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