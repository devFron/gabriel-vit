const Styles = (stylesSet)=>{
    let Mobile = null
    let Tablet = null
    let Laptop = null
    let Desktop = null
    let ExtraLarge = null

    for (let i = 0; i < stylesSet.length; i++) {
        const el = stylesSet[i];
        const {mobile,tablet,laptop,desktop,extraLarge} = el

        if('mobile' in el){
            Mobile += mobile
        }else{
            Mobile += 'null'
        }
        if('tablet' in el){
            Tablet += tablet
        }else{
            Tablet += 'null'
        }
        if('laptop' in el){
            Laptop += laptop
        }else{
            Laptop += 'null'
        }
        if('desktop' in el){
            Desktop += desktop
        }else{
            Desktop += 'null'
        }
        if('extraLarge' in el){
            ExtraLarge += extraLarge
        }else{
            ExtraLarge += 'null'
        }
    }     
}
export default Styles