const SkillThree = ()=>{
    const $SkillThree = document.createElement('section')
    $SkillThree.classList.add('skill__three')
    $SkillThree.innerHTML = `
        <article class="community">
            <p class="community__titile">Join our community</p>
            <p class="community__subtitle">30-day, hassle-free money back guarantee</p>
            <p class="community__desctiption">
                Gain access to our full library of tutorials along with expert code reviews.
                Perfect for any developers who are serious about honing their skills.
            </p>
        </article>

        <div class="together__sections">
            <article class="monthly">
                <p class="monthly__title">Monthly Suscription</p>
                <p class="monthly__price">$29 <span>per month</span></p>
                <p class="monthly__description">Full access for less that $1 a day</p>
                <button class="monthly__button button__disabled">Sign Up</button>
            </article>

            <article class="why">
                <p class="why__titile">Why US</p>
                <p class="why__description">
                    Tutorials by industry experts Perr & expert code review Coding exercises Access
                    to our GitHub repos Community decks New videos avery week
                </p>
            </article>
        </div>
    
    `
    const Styles = {
        mobile:`
        .skill__three{
            padding:1rem;
            width:70vw;
        }
        body{
            background:hsl(204, 43%, 93%);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .community{
            background:#fff;
            padding:1rem;
        }
        .community>p:nth-child(1){
            color:hsl(179, 62%, 43%);
            font-size: 20px;
            font-weight: 500;
        }
        .community>p:nth-child(2){
            color:hsl(71, 73%, 54%);
            font-weight: 500;
        }
        .community>p:nth-child(3){
            color:hsl(218, 22%, 67%);
            font-weight: 400;
        }
        .monthly{
            background: hsl(179, 62%, 43%);
            color:#fff;
            padding:1rem;
            display:flex;
            flex-direction: column;
        }
        .monthly__title{
            font-size:1rem;
            font-weight: 500;
            margin:0 ;
            padding:0 0 5px 0;
        }
        .monthly__description{
            margin:0;
            font-weight:400;
        }
        .monthly__price{
            font-size:2rem;
            padding:10px 0;
            margin:0;
            display: flex;
            align-items: center;
            font-weight: 500;
        }
        .monthly__price>span{
            color:hsl(204, 43%, 93%);
            font-size:1rem;
            padding:0 0 0 1rem;
        
        }
        .monthly>button{
            background:hsl(71, 73%, 54%);
            border:none;
            color:#fff;
            border-radius:5px;
            padding:10px 0;
            margin:1rem 0 0 0;
        }
        .why{
            background:hsla(179, 62%, 43%, 0.815);
            color:#fff;
            padding:1rem;
        }
        .why>p.why__titile{
            font-weight: 700;
            font-size:20px;
            margin:0;
            padding:0 0 1rem 0;
        }
        .why>.why__description{
            line-height: 30px;
            margin:0;
        }
        .community{
            border-radius:1rem 1rem 0 0;
        }   
        .monthly{
            border-radius:0 0 0 1rem;
        }
        .why{
            border-radius:0 0 1rem 0;
        }
        `,
        tablet:`
        .together__sections{
            display:grid;
             grid-template-columns: repeat(2,1fr);
         }
         body{
             height: 100vh;
         }
        `,
        desktkop:`
        .why,.community,.monthly{
            padding:2rem;
        }
        `,
        extraLarge:`
            .why,.community,.monthly{
                padding:4rem;
            }
        `

    }
    return [$SkillThree,[Styles]]
} 
export default SkillThree