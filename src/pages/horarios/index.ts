import { Router } from "@vaadin/router"

customElements.define(
    'horarios-page',
    class extends HTMLElement {
        shadow = this.attachShadow({ mode: 'open' });
        constructor() {
            super();
            this.render();
        }
        render() {
            const whats = require("../../assets/whatsapp-2.png")
            const style = document.createElement("style")
            style.textContent = `
            .contenedor{
                background: linear-gradient(145deg, rgb(101,78,100) 34%, black 67%);
                display: flex;
                flex-direction: column;
                align-items:center;
            }
            .presentacion__title{
                margin:0;
                padding:40px 0;
                text-align:center;
                font-family: 'Kanit', sans-serif;
                font-size: 36px;
                color:white;
                text-shadow: 0 0 23px red;
            }
            .lugar{
                font-family: 'Arimo', sans-serif;
                color: white;
                text-shadow: 0 0 23px red;
                text-align: center;
            }
            .maps{
                margin:auto;
            }
            .btn-wsp{
                position:fixed;
                width:60px;
                height:60px;
                line-height: 63px;
                top:25px;
                right:25px;
                background:#25d366;
                color:#FFF;
                border-radius:50px;
                text-align:center;
                font-size:35px;
                box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
                z-index:100;
                transition: all 300ms ease;
            }
            .img_whats{
                width:60px;
                height:62px;
            }
            .btn-wsp:hover{
                background: #20ba5a;
            }
            @media only screen and (min-width:320px) and (max-width:768px){
                .btn-wsp{
                    width:61px;
                    height:61px;
                    line-height: 66px;
                }
                .img_whats{
                    width:63px;
                    height:63px;
                    
                }
            }
            .back{
                background-color: #f4e1cb;
                border: solid 1px;
                border-radius: 5px;
                width: 118px;
                height: 45px;
                font-size: 22px;
            }
            `
            this.shadow.appendChild(style)
            const div = document.createElement("div")
            div.innerHTML = `
            <header-custom></header-custom>
              <div class="contenedor">
                   <h1 class="presentacion__title">nuestro local</h1>
                       <iframe class="maps"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.321094883843!2d-58.3114180851438!3d-34.7475034726264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d721500580f%3A0xb1d6aa03cf3372c3!2sAv.%20Carlos%20Pellegrini%204791%2C%20B1879%20Quilmes%20Oeste%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1668027646255!5m2!1ses!2sar" width="370" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   <h2 class="lugar">Islas Malvinas, Quilmes Oeste, Buenos Aires Argentina</h2>
                   <div class="btn-wsp">
                   <a href="https://api.whatsapp.com/send?phone=5491165103599" target="_blank">
                 
                   <img class="img_whats"src="${whats}">
                     </a>
                  </div>
                  <button class="back">home</button>
              </div>
              
            `
            function evento() {
                const botonEl = div.querySelector(".back")
                botonEl?.addEventListener("click", () => {
                    Router.go("/")
                })
            }
            evento()
            this.shadow.appendChild(div)
        }
    });