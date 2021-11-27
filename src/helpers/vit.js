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
    
    return `
        ${Mobile.replace(/null/g, '')}
        @media screen and (min-width:480px) {
            /* Begin Tablet */
            ${Tablet.replace(/null/g, '')}
        }
         @media screen and (min-width:770px) {
            /*Begin Laptop */
            ${Laptop.replace(/null/g, '')}

        } 
         @media screen and (min-width:1025px) {
            /*Begin Desktop */
            ${Desktop.replace(/null/g, '')}
        } 
          @media screen and (min-width:1201px) {
            /* begin TV */
            ${ExtraLarge.replace(/null/g, '')}

        }  
    `
}
export default Styles