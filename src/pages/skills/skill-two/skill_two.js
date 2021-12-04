const SkillTwo = ()=>{
    const $SkillTwo = document.createElement('section')
    $SkillTwo.classList.add('skill-two')
    $SkillTwo.innerHTML = `
        <header>
            <img src="src/pages/skills/skill-two/assets-skill/logo.svg" alt="logo of ping-comming-soon-page-master" class="logo">
        </header>
        <main>
            <h1 class="title">We are launching <span class="soon">soon!</span></h1>
            <h2 class="subtitle">Suscribe and get notified</h2>
            <form class="form__disabled">
                <div>
                    <input type="email" name="email" id="email-address" placeholder="Your email address...">
                    <span class="message__of__input__validation"></span>
                </div>
                <button class="button__disabled">Notify Me</button>
            </form>
            <div class="dashboard__image__box"><img src="src/pages/skills/skill-two/assets-skill/illustration-dashboard.png" alt="dashboard image" class="dashboard__image"></div>
        </main>

        <footer>
            <ul class="social-media">
                <li class="social-media__item"><a href="#/" class="social-media__link link__enabled"><i class="fab fa-facebook social-media__icon"></i></a></li>
                <li class="social-media__item"><a href="#/" class="social-media__link link__enabled"><i class="fab fa-twitter social-media__icon"></i></a></li>
                <li class="social-media__item"><a href="#/" class="social-media__link link__enabled"><i class="fab fa-instagram social-media__icon"></i></a></li>
            </ul>
            <h3 class="copyright"> © Copyright Ping. All rights reserved.</h3>
        </footer>
    `
    const Styles = {
        mobile:`
        .skill-two{
            padding:0 1rem;
        }
        header{
            display:flex;
            justify-content: center;
            padding:1rem 0 0 0;
        }
        main>h1>span{
            color:hsl(209, 33%, 12%);
            font-weight: 700;
        
        }
        main>h1{
            color:hsl(0, 0%, 59%);
            font-weight: 400;
            text-align: center;
            margin:3rem 0 1rem 0;
        }
        main>h2{
            color:hsl(209, 33%, 12%);
            font-weight:400;
            font-size:1rem;
            text-align: center;
            margin:0 0 3rem 0;
        }
        .logo{
            max-width:100%;
        }
        .subtitle{
            color:hsl(209, 33%, 12%);
            font-weight: 4000;
        
        }
        form{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        form>button{
            margin:1rem 0 0 0 ;
            border-radius:2rem;
            padding:10px 0 ;
            border:none;
            background:hsl(223, 87%, 63%);
            color:#fff;
            font-weight:700;
            box-shadow:0 0 10px hsl(223, 87%, 63%);
        }
        form>button:hover{
            background:hsla(223, 87%, 63%, 0.897);
        }
        form>input::placeholder{
            color:hsl(223, 100%, 88%);
        }
        form>div{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        form>div>span{
            text-align: center;
            margin:1rem 0 ;
        }
        form>div>input{
            background:transparent;
            border:2px solid hsl(223, 100%, 88%);
            padding:10px 0 10px 1rem;
            border-radius: 2rem;
            color:hsl(209, 33%, 12%);
            outline:none;
        }
        main>.dashboard__image__box>img{
            max-width:100%;
            margin:2rem 0 0 0;
        }
        footer{
            padding:3rem 0 1rem 0;
        }
        footer>ul{
            margin:0;
            padding:0;
            list-style: none;
            display:flex;
            justify-content:space-around ;
            padding:1rem 0;
            font-size:20px;
        }
        
        footer>ul>li>a{
            padding:10px 14px;
            border-radius: 2rem;
            border:2px solid #eee;
            color:hsl(223, 87%, 63%);
            font-size:30px;
        }
        footer>ul>li>a:hover{
            background: hsl(223, 87%, 63%);
            color:#fff;
        }
        footer>h3{
            color:hsl(0, 0%, 59%);
            font-weight: 400;
            font-size:1rem;
            text-align: center;
            margin:1rem 0 0 0;
        }
        form>div>span{
            color:hsl(354, 100%, 66%);
            font-style:italic ;
        }
        `,
        tablet:`
        form{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            display:grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap:2rem ;
        }
        form>button{
            margin:0;
            padding:1rem 0 ;
        }
        `,
        laptop:`
        main>.dashboard__image__box{
            display: flex;
            justify-content: center;
        }
        main>.dashboard__image__box>img{
            max-width:70%;
        }
        .skill-two{
            display: flex;
            flex-flow: column;
            align-items: center;
            width:50vw;
        }
        body{
            display: flex;
            justify-content: center;
        }
        `

    }
    return [$SkillTwo,[
        Styles
    ]]
}
export default SkillTwo