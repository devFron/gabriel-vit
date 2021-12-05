import PerfilPhoto from "../assets/perfil-photo-radius.png"
const PresentationCard = ()=>{

    const PresentationCard = document.createElement('section')
    PresentationCard.classList.add('presentation-card')
    PresentationCard.innerHTML = `
        <img src="${PerfilPhoto}" alt="Perfil photo" class="presentation-card__picture">
        <section class="presentation-card__data">
            <section class="presentation-card__data__header">
                <p class="presentation-card__data__name">
                    José Gabriel Vit García
                </p>
                <article class="presentation-card__flag">
                    <span class="flag-left"></span>
                    <span class="flag-right"></span>
                
                </article>
            </section>
            <article class="presentation-card__data__description">
                <h1 class="">Front End Developer <span class="">con conocimientos en</span></h1>
                <section class="technologies__name">
                    <h2 class="">HTML</h2>
                    <h2 class="">CSS</h2>
                    <h2 class="">JavaScript</h2>
                    <h2 class="">Git</h2>
                </section>
            </article>
            <section class="presentation-card__social-media">
                <a href="https://twitter.com/DevFront___" class="presentation-card__social__media__link" target="_blank">
                    <i class="presentation-card__social-media__icon presentation-card__twitter fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/devfront___/" class="presentation-card__social__media__link" target="_blank">
                    <i class="presentation-card__social-media__icon presentation-card__instagram fab fa-instagram"></i>
                </a>
            </section>
        </section>
        
    `
    return [
        PresentationCard,
        {
            mobile:`
            .presentation-card{
                border-radius:2rem;
                margin:2rem 1rem 1rem 1rem;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                position:relative;
                padding:2rem 0 0 0;
            }
            .presentation-card__picture{
                max-width:100px;
                position:absolute;
                top:0;
            }
            .presentation-card__data{
                text-align:center;
                justify-content:center;
                display:flex;
                flex-direction:column;
                background:#E45858;
                padding:4rem 0 0 0;
                border-radius:2rem;
                color:#fff;
            }
            .presentation-card__data__header{
                display:flex;
                flex-direction:column;
                align-items: center;
            }
            .presentation-card__flag{
                display:block;
                background:#fff;
                width: 100px;
                border-radius:20px;
                display:flex;
                justify-content:space-between;
                margin:0 0 10px 0; 
            }
            .presentation-card__social__media__link{
                color:#fff;
            }
            .flag-right{
                background:#3498DB;
                display:block;
                height:45px;
                width: 2rem;
                border-radius:0 10px 10px 0 ;
            }
            .flag-left{
                background:#3498DB ;
                display:block;
                height:45px;
                width: 2rem;
                border-radius:10px 0 0 10px  ;
            }
            .presentation-card__data__name{
                font-size:20px;
                text-align:center;
                margin-bottom:10px;
            }
            .presentation-card__data__description>h1{
                margin:10px 0 ;    
                padding:0 1rem;
            }
            .presentation-card__data__description>h1>span{
                font-weight:400;
                font-size:1rem;
                display:block;
                margin:1rem;
            }
            .technologies__name{
                font-size:10px;
                display:flex;
                justify-content:space-between;
                padding:0 1rem;
            }
            .technologies__name>h2{
                font-size:1rem;
                margin:0;
                font-weight:400;
            }
            .presentation-card__social-media{
                margin:1rem 0;
                font-size:20px;
            }
            `,
            laptop:`
            .presentation-card__data__header{
                display:flex;
                flex-direction: row;
                align-items: center;
            }
            .presentation-card__data__name{
                margin:0 1rem 0 0 ;
                font-size:25px;
            }
            .presentation-card{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding:0 0 0 3rem;
                width:33em;
                margin:1rem auto 0 auto;
            }
            .presentation-card__data{
                flex-direction: column;
                padding:1rem 2rem 1rem 7rem;
            }
            .presentation-card__picture{
                top:auto;
                left:0;
                min-width:150px;
            }
            .presentation-card__data__description>h1{
                margin:10px 0 ;    
                padding:0 1rem;
                text-align: start;
                font-size:35px;
                padding:0;
            }
            .presentation-card__data__description>h1>span{
                font-size:20px;
                margin:0;
                padding:10px 0 5px 0;
            }
            .technologies__name{
                justify-content: flex-start;
                padding:0;
            }
            .technologies__name>h2{
                margin:0 10px 1rem 0;
            }
            .presentation-card__social-media{
                text-align:start ;
            }
            `,
        }
    ]
}

export default PresentationCard