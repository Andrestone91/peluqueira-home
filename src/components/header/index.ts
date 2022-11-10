customElements.define(
    'header-custom',
    class extends HTMLElement {

        constructor() {
            super();
            this.render();
        }
        render() {
            const div = document.createElement("div")
            div.innerHTML =
                `
            <div class="header">
            <div class="caja-1">
            <p class="title">PELUQUERIA</p>
            <p class="title">SHEKINAH</p>
            </div>
            <div class="caja-2">
            
            </div>
            </div>`

            this.appendChild(div)
            const style = document.createElement("style")
            style.textContent = `
            .header{
                margin:0;
                display:flex;
                justify-content: left;
                background-color:#dddbd9;
                height:100px;
                font-family: 'Montserrat', sans-serif;
                font-size:30px
            }
            @media(min-width:975px){
                .header{
                    height:90px;
                }
            }
            .title{
                margin:0;
            }
            .caja-1{
                margin:10px auto 0 30px;
            }
            `
            this.appendChild(style)
        }
    });