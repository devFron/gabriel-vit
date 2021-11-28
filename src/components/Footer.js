import ContactForm from './Contact_form.js'
const Footer = ()=>{
    const Footer = document.createElement('footer')
    Footer.innerHTML = `
        <section class="wave__effect">
            <div style="height: 150px; overflow: hidden;" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #08f;"></path>
                </svg>
            </div>
        </section>
        
    `
    Footer.appendChild(ContactForm()[0])

    return [Footer,{
        mobile:`
            ${ContactForm()[1].mobile}
        `,
        laptop:`
            ${ContactForm()[1].laptop}
        `,
        extraLarge:`
            ${ContactForm()[1].extraLarge}
        `
    }]
}
export default Footer