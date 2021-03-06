const Header = ()=>{
    const styles = `
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
    .dark-mode__swich>.icon__moon,.icon__sun{
        font-size:40px;
        cursor:pointer;
    }
    .dark-mode__swich>.icon__moon{
        display: none;
    }
    @media screen and (min-width:350px) {
        .menu__link{
            font-size:20px;
        }
    }
    @media screen and (min-width:700px) {
        .menu__link{
            font-size:25px;
        }
    }
    @media screen and (min-width:1000px) {
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
        .dark-mode__swich>section{
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
        .dark-mode__swich>.icon__moon,.icon__sun{
            font-size:2rem;
            color:#fff;
            padding:10px 1rem;
        }
        .dark-mode__swich>.icon__moon{
            display: inline-block;
        }
    }
    @media screen and (min-width:1000px){
        .menu__link{
            padding:0 2rem;
        }
    }
    `
    const $Header = document.createElement('header')
    const $Logo = document.createElement('img')
    const $Nav = document.createElement('nav')
    const $Menu = document.createElement('ul')
    const MenuItems = [
        {
            icon:`<i class="fas fa-home"></i>`,
            link:'#/home',
            content:'Inicio'
        },
        {
            icon:'<i class="fas fa-align-left"></i>',
            link:'#/cv',
            content:'CV'
        },
        {
            icon:'<i class="fas fa-address-book"></i>',
            link:'#/about',
            content:'Sobre'
        },
        {
            icon:'<i class="fas fa-greater-than-equal"></i>',
            link:'#/blog',
            content:'Blog'
        }
    ]
    const $DarkModeSwich = document.createElement('section')
    const $DarkModeIconSun = document.createElement('i')
    const $DarkModeIconMoon = document.createElement('i')
    const $DarkModeSwichCircle = document.createElement('section')

    $Logo.src = '../src/assets/logo.png'
    $Logo.classList.add('logo')
    $Menu.classList.add('menu')
    $DarkModeSwich.classList.add('dark-mode__swich')
    $DarkModeIconSun.classList.add('icon__sun','fas','fa-sun')
    $DarkModeIconMoon.classList.add('icon__moon','fas','fa-moon')

    $Header.appendChild($Logo)
    $Nav.appendChild($Menu)
    MenuItems.forEach(el=>{
        const {icon,link,content} = el
        const $MenuItem = document.createElement('li')
        const $MenuLink = document.createElement('a')
        $MenuLink.href=link
        $MenuLink.innerHTML = `${icon} ${content} `
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

    return {
        componnet:$Header,
        componnetStyles:styles
    }  
}
export default Header