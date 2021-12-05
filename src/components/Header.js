import Logo from '../assets/personal/logo.png'
import Icon from '../helpers/icons.js'
const Header = ()=>{
    const $Header = document.createElement('header')
    const $Logo = document.createElement('img')
    const $Nav = document.createElement('nav')
    const $Menu = document.createElement('ul')
    const MenuItems = [
        {
            icon:Icon({prefix:'fas',iconName:'home'}),
            link:'#/home',
            content:'Inicio'
        },
        {
            icon:Icon({prefix:'fas',iconName:'align-left'}),
            link:'#/cv',
            content:'CV'
        },
        {
            icon:Icon({prefix:'fas',iconName:'address-book'}),
            link:'#/about',
            content:'Sobre'
        },
        {
            icon:Icon({prefix:'fas',iconName:'greater-than-equal'}),
            link:'#/blog',
            content:'Blog'
        }
    ]
    const $DarkModeSwich = document.createElement('section')
    const $DarkModeIconSun = document.createElement('section')
    const $DarkModeIconMoon = document.createElement('section')
    const $DarkModeSwichCircle = document.createElement('section')
    $DarkModeIconSun.innerHTML = Icon({prefix:'fas',iconName:'sun'})
    $DarkModeIconMoon.innerHTML = Icon({prefix:'fas',iconName:'moon'})

    $Logo.src = `${Logo}`
    $Logo.classList.add('logo')
    $Menu.classList.add('menu')
    $DarkModeSwich.classList.add('dark-mode__swich')
    $DarkModeIconSun.classList.add('icon__sun')
    $DarkModeIconMoon.classList.add('icon__moon')
    $DarkModeSwichCircle.classList.add('circle-swich')
    $Header.appendChild($Logo)
    $Nav.appendChild($Menu)
    MenuItems.forEach(el=>{
        const {icon,link,content} = el
        const $MenuItem = document.createElement('li')
        const $MenuLink = document.createElement('a')
        $MenuLink.href=link
        $MenuLink.innerHTML = `<section class="header__menu__icon">${icon}</section> ${content} `
        $MenuItem.classList.add('menu__item')
        $MenuLink.classList.add('menu__link')
        $MenuItem.appendChild($MenuLink)
        $Menu.appendChild($MenuItem)
    })
    $Header.appendChild($Nav)
    $DarkModeSwich.appendChild($DarkModeIconSun)
    $DarkModeSwich.appendChild($DarkModeIconMoon)
    $DarkModeSwich.appendChild($DarkModeSwichCircle)
    $Header.appendChild($DarkModeSwich)

    return [$Header,{
        mobile:`
        header{
            background:#eee;
            position:fixed;
            bottom:0;
            left:0;
            right:0;
            display:flex;
            align-items:center;
            justify-content: center;
            padding:3rem 0 0 0;
            border-radius:3rem 3rem 0 0;
        
        }
        header>.logo{
            display:none;
        }
        header>nav{
            width:100%;
        }
        header>nav>.menu{
            display:flex;
            list-style:none;
            margin:0;
            padding:0;
            justify-content: space-between;
            padding:0 1rem;
        }
        .menu__link{
            display:flex;
            flex-direction: column;
            align-items: center;
            font-weight: 500;
            text-decoration:none;
            color:#2B2C34;
        }
        .menu__item{
            padding:0 0 1rem 0;
        }
        .dark-mode__swich{
            position:absolute;
            background:red;
            top:-25%;
            background:#fff;
            padding:1rem 1.50rem;
            border-radius:50%;
            color:#2B2C34;
        }
        .icon__moon,.icon__sun{
            display:inline;
        }
        .dark-mode__swich>.icon__moon>svg,.icon__sun>svg{
            font-size:40px;
            cursor:pointer;
            margin:0;
        }
        .dark-mode__swich>.icon__moon>svg{
            display: none;
        }
        `,
        tablet:`
            .menu__link{
                font-size:20px;
            }
        `,
        laptop:`
        header{
            position:static;
            border-radius:0;
            padding:0;
            display:flex;
            justify-content:space-between;
            align-items: center;
            padding:1rem;
        }
        header>nav{
            width:auto;
        }
        header>nav>.menu{
            justify-content: center;
        }
        .menu__item{
            padding:0 1rem;
        }
        header>.logo{
            display:inline-block;
            width:100px;
        }
        .dark-mode__swich{
            position: relative;
            background:#E45858 ;
            border-radius:0;
            padding:0;
            border-radius:30px;
            display:flex;
            justify-content:space-between;
        }
        .dark-mode__swich>.circle-swich{
            position:absolute;
            top:0;
            bottom:0;
            width:50px;
            height:50px;
            background:#fff;
            border-radius:50%;
        }
        .moon-active{
            left:auto;
            right:0;
        }
        .dark-mode__swich>.icon__moon>svg,.icon__sun>svg{
            font-size:2rem;
            color:#fff;
            padding:10px 1rem;
        }
        .dark-mode__swich>.icon__moon>svg{
            display: inline-block;
        }
        `,
    }]
}
export default Header