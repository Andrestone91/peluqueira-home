customElements.define(
    'footer-custom',
    class extends HTMLElement {

        constructor() {
            super();
            this.render();
        }
        render() {
            const imgFooter = require("../../assets/img-footer.jpg")
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="footer">
            
              <img class="img__footer"src="${imgFooter}">
               <div class="text">
                  <p class="title">PELUQUERIA</p>
                  <p class="title">SHEKINAH</p>
                  </div>
            </div>
            `
            this.appendChild(div)
            const style = document.createElement("style")
            style.textContent = `
            .footer{
                width:100%;
                height:430px;
                    background:linear-gradient( 90deg, #f4e1cb 50%, black 50% );
                   
            }
            .text{
                font-family: 'Montserrat', sans-serif;
                margin:15px;
            }
         
            .img__footer{
                width:300px;
                padding:50px 0 0 50px;
                object-fit: cover;
                margin:0 0 0 0;
            }
            `
            this.appendChild(style)
        }
    });