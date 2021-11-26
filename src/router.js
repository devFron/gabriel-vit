import Home from './pages/home/home.js'
const Router = async ()=>{
    const {hash} = location
    const $Root = document.getElementById('root')
    $Root.innerHTML=''    
    if(!hash.includes('#/skill')){ 
    }else{

        console.log('skills')
    }

}
export default Router