import Header from '../../components/Header.js'
import PresentationCard from '../../components/Presentation_card.js'
import ContactForm from '../../components/Contact_form.js'
const Home = ()=>{
    const $Home = document.createElement('section')
    const [componentHeader,stylesHeader] = Header()
    const [componentPresentationCard,stylesPresentationCard] = PresentationCard()
    const [componentContactForm,stylesContactForm] = ContactForm()
    $Home.appendChild(componentHeader)
    $Home.appendChild(componentPresentationCard)
    $Home.appendChild(componentContactForm)
    const stylesHome = {
        mobile:`
            body{
                background:url(src/assets/background-mobile.png);
            }
        `
    }
    return [
        $Home,
        [
            stylesHome,
            stylesHeader,
            stylesPresentationCard,
            stylesContactForm
        ]
    ]
}
export default Home