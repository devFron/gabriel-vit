import Home from './pages/home/home.js'
const Router = async ()=>{
    const {hash} = location
    const $Root = document.getElementById('root')
    $Root.innerHTML=''    
    if(!hash.includes('#/skill')){ 
        switch (hash) {
            case '':
               $Root.appendChild(Home())
            break;

            case '#/home':
               $Root.appendChild(Home())
            break;
       
           default:
            break;
        }
    }else{

        console.log('skills')
    }

}
export default Router