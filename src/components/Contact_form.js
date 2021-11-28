const ContactForm = ()=>{
    const Form = document.createElement('form')
    Form.innerHTML = `
        <h2 class="form__title">Contacto</h2>
            <section class="">
                <input type="text" name="name" placeholder="Escribre tu nombre" title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>
                <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
            </section>
        <textarea name="message" placeholder="Mensaje" title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
        <input type="submit" value="Enviar">
    `

    return [Form,{
        mobile:`
        form{
            background:#E45858;
            margin:0;
            font-family:'Roboto',sans-serif;
            padding:1rem 1rem 10rem 1rem;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        form>h2{
            color:#fff;
        }
        form>section{
            margin:0 0 1rem 0;
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        form>section>input::placeholder,textarea::placeholder{
            font-family:'Roboto',sans-serif;
            color:#fff;
            font-weight: 500;
        }
        form>section>input,textarea{
            font-family:'Roboto',sans-serif;
            margin:1rem 0 0 0;
            border:2px solid #fff;
            border-radius:10px;
            background:transparent;
            color:#ffff;
            outline:none;
            padding: 10px 10px  10px 10px;
        }
        form>textarea{
            max-width:100%;
            max-height:150px;
            min-width:100%;
            min-height:150px;
            box-sizing: border-box;
        }
        form>input:last-child{
            background:none;
            width:40%;
            border-radius:5px;
            border:2px solid #fff;
            padding:10px 0;
            color:#fff;
            font-weight: 700;
            margin:10px 0 0 0;
        }
        `,
        laptop:`
            form>input:last-child{
                width:20%;
            }
            form>section{
                margin:0;
                display: flex;
                flex-direction: row;
                width: 100%;
                justify-content: space-around;
            }
            form>section>input,textarea{
                width:40%;
            }
            form{
                padding-bottom:2rem;
            }
        `,
        extraLarge:`
            form>input:last-child{
             width:20%;
            }
        `,
    }]
}
export default ContactForm