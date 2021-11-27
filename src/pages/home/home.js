import Header from '../../components/Header.js'
const Home = ()=>{
    const $Home = document.createElement('section')
    const [componentHeader,stylesHeader] = Header()

    $Home.appendChild(componentHeader)

    return [
        $Home,
        [
            stylesHeader
        ]
    ]
}
export default Home