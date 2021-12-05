import Header from '../../components/Header.js'
import PresentationCard from '../../components/Presentation_card.js'
import Footer from '../../components/Footer.js'
import backgroundMobile from '../../assets/background-mobile.png'
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
                background:url(${backgroundMobile});
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