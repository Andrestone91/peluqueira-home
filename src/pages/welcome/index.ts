import { Router } from "@vaadin/router"
import { start } from "repl";

customElements.define(
    'welcome-page',
    class extends HTMLElement {
        shadow = this.attachShadow({ mode: 'open' });
        constructor() {
            super();
            this.render();
        }
        render() {
            function assets() {
                const fondo = require("../../assets/fondo-principal.jpg")
                const estilo = require("../../assets/estilo.jpg")
                const jobUno = require("../../assets/trabajo-1.jpg")
                const jobDos = require("../../assets/trabajo-2.jpg")
                const jobTres = require("../../assets/trabajo-3.jpg")
                const jobCuatro = require("../../assets/trabajo-4.jpg")
                const ubicacion = require("../../assets/img-ubicacion.jpg")
                const whatsapp = require("../../assets/whatsapp.png")
                const whatsappDos = require("../../assets/whatsapp-2.png")
                const lista = { fondo, estilo, jobUno, jobDos, jobTres, jobCuatro, ubicacion, whatsapp, whatsappDos }
                return lista
            }

            const div = document.createElement("div")
            const style = document.createElement("style")

            style.textContent = `
            @media(min-width:975px){
                
            }
            .home{
                background: url(${assets().fondo});
                height: 800px;
            }
            @media(min-width:975px){
                .home{
                    height: 685px;
                }   
            }
            .presentacion__title{
                margin:0;
                padding:40px 0;
                text-align:center;
                font-family: 'Kanit', sans-serif;
                font-size: 36px;
            }
            .contenedor__img{
                height:425px;
                width:315px;
                margin:auto;
            }
            @media(min-width:575px){
                .contenedor__img{
                    height: 477px;
                    width: 381px;
                }
            }
            .foto-estilo{
                height:100%;
                width: 100%;
                object-fit: cover;
                padding: 100px 0 0 0;
            }
            @media(min-width:575px){
                .foto-estilo{
                    padding: 57px 0 0 0;
                }
            }
            @media(min-width:975px){
                .foto-estilo{
                    height: 65%;
                    width: 100%;
                    
                }
            }
            .decoration{
                background-color: #f4e1cb;
                width: 337px;
                margin:auto;
                padding: 59px 0 0 0;
            }
            @media(min-width:575px){
                .decoration{
                    width:500px;
                }
            }
            @media(min-width:975px){
                .decoration{
                    width: 510px;
                    height: 402px;
                }
            }
          
         
            .option-uno{
                text-align:left;
                padding:0 0 0 40px;
                font-size:50px;
                font-family: 'Xanh Mono', monospac
            }
            @media(min-width:575px){
                .option-uno{    
                    padding:0 0 0 67px;
                }
            }
            @media(min-width:975px){
                .option-uno{
                    font-size:67px;
                }
            }
            .option-dos{
                text-align:right;
                padding:50px 40px 0 0;
                font-size:50px;
                font-family: 'Xanh Mono', monospac
            }
            @media(min-width:575px){
                .option-dos{    
                    padding:50px 67px 0 0;
                }
            }
            @media(min-width:975px){
                .option-dos{
                   
                    font-size:67px;
                }
            }
            .decoration__job-uno{
                background-color: #f4e1cb;
                width:100%;
               float:left;
            }
            @media(min-width:575px){
                .decoration__job-uno{
                    width:300px;
                    margin:0 0 0 30px;
                }
            }
            @media(min-width:975px){
             .decoration__job-uno{
                margin:auto;
             }   
            }
            .decoration__job-dos{
                background-color: #f4e1cb;
                width:100%;
                float:right;
            }
            @media(min-width:575px){
                .decoration__job-dos{
                    width:300px;
                    margin:0 30px 0 0;
                }
            }
            @media(min-width:975px){
                .decoration__job-dos{
                   margin:auto;
                }   
               }
            .decoration__job-tres{
                background-color: #f4e1cb;
                width:100%;
                float:left;
            }
            @media(min-width:575px){
                .decoration__job-tres{
                    width:300px;
                    margin:0 0 0 30px;
                }
            }
            @media(min-width:975px){
                .decoration__job-tres{
                   margin:auto;
                }   
               }
            .decoration__job-cuatro{
                background-color: #f4e1cb;
                width:100%;
                float:right;
            }
            @media(min-width:575px){
                .decoration__job-cuatro{
                    width:300px;
                    margin:0 30px 0 0;
                }
            }
            @media(min-width:975px){
                .decoration__job-cuatro{
                   margin:auto;
                }   
               }
            .job{
                display: flex;
                flex-direction: column;
            }
            @media(min-width:975px){
                .job__contenedor{
                    display:grid;
                    grid-template-columns:1fr 1fr;
                }
            }   
            .job__uno{
                width:226px;
                height:338px;
                float:right;
            }
            .job__dos{
                width:226px;
                height:338px;
                float:left;
            }
            .job__tres{
                width:226px;
                height:338px;
                float:right;
            }
            .job__cuatro{
                width:226px;
                height:338px;
                float:left;
            }
            .job__description{
                background-color:white;
                padding: 17px 0 17px 0;
                font-size:22px;
            }
            @media (min-width:769px){
                .job__description{

                    height:230px;
                }
            }
            @media(min-width:975px){
                .job__description{
                    border:solid 1px;
                }
            }
            .job__description__uno{
                font-family: 'Arimo', sans-serif;
                padding:0 15px 0 90px;
            }
            .job__description__dos{
                font-family: 'Arimo', sans-serif;
                padding:0 90px 0 15px;
            }
            .job__description__tres{
                font-family: 'Arimo', sans-serif;
                padding:0 15px 0 90px;
            }
            .job__description__cuatro{
                font-family: 'Arimo', sans-serif;
                padding:0 90px 0 15px;
            }
            .btn-wsp{
                position:fixed;
                width:60px;
                height:60px;
                line-height: 63px;
                bottom:25px;
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
            .btn-wsp:hover{
                background: #20ba5a;
            }
            .boton__contenedor{
                text-align:center;
                margin:60px;
            }
            .boton{
                background-color:#f4e1cb;
                border:solid 1px;
                border-radius:5px;
                width: 190px;
                height: 60px;
                font-size:22px;
            }
            .img__ubi{
                width: 373px;
                height: 187px;
                padding:0 0 0 0;
                object-fit: cover;
                margin:auto;
            }
            .ubicacion{
                display:flex;
                flex-direction:column;
            }
            @media(min-width:975px){
                .ubicacion{
                    border-top: solid #f4e1cb 10px;
                     margin: 98px 0 0 0;
                }
            }
            .text-ubicacion{
                font-family: 'Arimo', sans-serif;
                margin:20px auto;
            }
            `
            this.shadow.appendChild(style)
            div.innerHTML = `
            <header-custom></header-custom>
              <section class="home">
                 <div class="decoration">
                  <h1 class="presentacion__title option-uno" >Cortes</h1>
                  <h1 class="presentacion__title option-dos">Unisex</h1>
                 <div class="contenedor__img">
                  <img class= "foto-estilo" src="${assets().estilo}">
                  </div>
                </div>
            </section>
            <section class="job">
            <h1 class="presentacion__title">Servicios</h1>
                  <div class="job__contenedor">
                    <div class="decoration__job-uno">
                        <img class="job__uno" src="${assets().jobUno}">
                           <h1 style="text-align:center; font-size:25px; font-family: 'Tiro Devanagari Hindi', serif;">
                             P <br />
                             L <br />
                             A <br />
                             N <br />
                             C <br />
                             H <br />
                             A <br />
                             D <br />
                             O
                          </h1>
                          <div class="job__description">
                             <p class="job__description__uno">con maquinas y elementos especializados, cambia tu rutina y sonrie al mismo tiempo.</p>
                         </div>
                     </div>
                      <div class="decoration__job-dos">
                          <img class="job__dos" src="${assets().jobDos}">
                          <h1 style="text-align:center;font-size:35px;font-family: 'Tiro Devanagari Hindi', serif;">
                             C <br />
                             O <br />
                             R <br />
                             T <br />
                             E <br />
                             S
                           </h1>
                       <div class="job__description">
                          <p class="job__description__dos" >para damas, caballeros y niños con o sin turno previo, con mas de 10 años de experiencia al mejor precio. </p>
                      </div>
                   </div>
                      <div class="decoration__job-tres">
                          <img class="job__tres" src="${assets().jobTres}">
                          <h1 style="text-align:center; padding:47px 0 56px 0; margin:0;font-size:35px;font-family: 'Tiro Devanagari Hindi', serif;">
                             C <br />
                             O <br />
                             L <br />
                             O <br />
                             R 
                           </h1>
                       <div class="job__description">
                          <p class="job__description__tres" >claritos, cambio de color y estilos a tu gusto</p>
                      </div>
                   </div>
                   <div class="decoration__job-cuatro">
                       <img class="job__cuatro" src="${assets().jobCuatro}">
                       <h1 style="text-align:center; padding:15px 0 11px 0; margin:0;font-size:29px;font-family: 'Tiro Devanagari Hindi', serif;">
                          E <br />
                          S <br />
                          P <br />
                          E <br />
                          C <br />
                          I <br />
                          A <br />
                          L 
                        </h1>
                    <div class="job__description">
                       <p class="job__description__cuatro" >baños de cremas, rizados, colocacion de mechas y mucho mas.</p>
                   </div>
                  </div>
                   </div>
                  </div>
               </div>
               </section>
               <section class="ubicacion"> 
                 <h1 class="presentacion__title">Ubicacion</h1>
                 <img class="img__ubi"src="${assets().ubicacion}">
                 <p class="text-ubicacion">QUILMES OESTE, BUENOS AIRES ARGENTINA</p>
                   <div class="boton__contenedor">
                   <button class="boton">ver mas</button>
                  </div>
              </section>
               <footer-custom></footer-custom>
            
               <div class="btn-wsp">
               <a href="https://api.whatsapp.com/send?phone=5491165103599" target="_blank">
             
               <img class="img_whats"src="${assets().whatsappDos}">
                 </a>
              </div>
            `

            function horarios() {
                const boton = div.querySelector(".boton")
                boton?.addEventListener("click", () => {
                    Router.go("/horarios")
                })
            }
            horarios()
            this.shadow.appendChild(div)
        }
    });