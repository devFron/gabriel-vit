import Header from '../../components/Header.js'
import PresentationCard from '../../components/Presentation_card.js'
import Footer from '../../components/Footer.js'
const Home = ()=>{
    const $Home = document.createElement('section')
    const [componentHeader,stylesHeader] = Header()
    const [componentPresentationCard,stylesPresentationCard] = PresentationCard()
    const [componentFooter,stylesFooter] = Footer()
    $Home.appendChild(componentHeader)
    $Home.appendChild(componentPresentationCard)
    $Home.appendChild(componentFooter)
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
            stylesFooter
        ]
    ]
}
export default Home