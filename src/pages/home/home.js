import Header from '../../components/Header.js'
import PresentationCard from '../../components/Presentation_card.js'
const Home = ()=>{
    const $Home = document.createElement('section')
    const [componentHeader,stylesHeader] = Header()
    const [componentPresentationCard,stylesPresentationCard] = PresentationCard()

    $Home.appendChild(componentHeader)
    $Home.appendChild(componentPresentationCard)

    return [
        $Home,
        [
            stylesHeader,
            stylesPresentationCard
        ]
    ]
}
export default Home