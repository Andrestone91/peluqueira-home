customElements.define(
    'popup-info',
    class extends HTMLElement {

        constructor() {
            super();
            this.render();
        }
        render() {
            const div = document.createElement("div")
            div.innerHTML = `
            
            `
            this.appendChild(div)
            const style = document.createElement("style")
            style.textContent = `
            
            `
            this.appendChild(style)
        }
    });