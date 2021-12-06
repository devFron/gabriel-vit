import Logo from '../../../assets/skill/fronendmentor/skill_01/logo.svg'
import mockups from '../../../assets/skill/fronendmentor/skill_01/illustration-mockups.svg'
import backgroundMobile from '../../../assets/skill/fronendmentor/skill_01/bg-mobile.svg'
const SkillOne = ()=>{
    const $SkillOne = document.createElement('section')
    $SkillOne.classList.add('one-skill-body')
    $SkillOne.innerHTML = `
        <header>
            <img src="${Logo}" alt="Hunddle Logo" class="header__logo">
        </header>
        <div><img src="${mockups}" alt="illustration-mockups" class=""></div>

        <div class="flex-container">
            <section class="hunddle__data">
                <h2 class="hunddle__title">
                    Build The Community Your Fans Will Love
                </h2>
                <p class="hunddle__description">
                    Hunddle re-imagnies the way we build communities. You have a voice,buy so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                </p>
            </section>
            <div class="hunddle__button__box"><button class="button__disabled">Register</button></div>
        </div>
        <section class="hunddle__social-media">
            <i class="fab fa-facebook hunddle__social-media__icon"></i>
            <i class="fab fa-twitter hunddle__social-media__icon"></i>
            <i class="fab fa-instagram hunddle__social-media__icon"></i>
        </section>
    `
    const SkillOneStyles = {
        mobile:`
        .one-skill-body{
            background:url(${backgroundMobile}),hsl(257, 40%, 49%);
            padding:0 1rem;
            color:#fff;
            background-repeat:no-repeat;
            background-position: 0px 0px;
            background-size: 100%;
        }
        .one-skill-body>div>img{
            max-width:100%;
        }
        .one-skill-body>header>.header__logo{
            max-width:100%;
        }
        .one-skill-body>.flex-container>.hunddle__data>p,h2{
            text-align:center;
        }
        .one-skill-body>.hunddle__data>p{
            line-height: 25px;
        }
        .one-skill-body>.hunddle__data{
            display:flex;
            justify-content:center;
            flex-direction:column;
            padding:0 1rem;
        }
        .one-skill-body>.flex-container>.hunddle__button__box{
            display:flex;
            justify-content: center;
        }
        .one-skill-body>.flex-container>.hunddle__button__box>button{
            background:#fff;
            border:none;
            color:hsl(257, 40%, 49%);
            font-weight: 400;
            box-shadow: 0 5px  10px  rgba(0, 0, 0, 0.377);
            border-radius:30px;
            margin:1rem 0;
            padding:1rem 5rem;
        }
        .one-skill-body>.flex-container>.hunddle__button__box>button:hover{
            background:hsl(300, 69%, 71%);
            color:#fff;
        }
        .one-skill-body>.hunddle__social-media{
            display:flex;
            justify-content:center;
            padding:1rem 0;
            grid-gap:1rem;
        }
        .one-skill-body>.hunddle__social-media>i{
            font-size:2rem;
            cursor:pointer;
            border:2px;
            border-radius: 50px;
            border:2px solid #fff;
            padding:10px;
        }
        .one-skill-body>.hunddle__social-media>i:hover{
            color:hsl(300, 69%, 71%);
            border-color:hsl(300, 69%, 71%);
        }
        
        `,
        tablet:`
            .one-skill-body>div>img{
                max-width:100%;
                margin:0 auto;
            }
        `,
        laptop:`
        .one-skill-body{
            display:flex;
            height: 100vh;
            align-items: center;
            grid-gap:2rem;
            background:url(${backgroundMobile}),hsl(257, 40%, 49%);
            background-repeat:no-repeat;
            background-size:100%;
    
        }
        header{
            position:fixed;
            top:2rem;
            left:1rem;
        }
        .hunddle__social-media{
            position:fixed;
            bottom:1rem;
            right:2rem;
        }
        .one-skill-body>.flex-container>.hunddle__button__box{
            justify-content: flex-start;
        }
        .one-skill-body>.flex-container>.hunddle__data>p,h2{
            text-align:start;
        }
        .one-skill-body>.flex-container>.hunddle__data>h2{
            font-size:32px;
        }
        .one-skill-body>.flex-container>.hunddle__data>p{
            font-size:20px;
        }
        `
    }
    return [$SkillOne,[
        SkillOneStyles
    ]]
}
export default SkillOne