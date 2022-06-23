
class Card extends HTMLElement {
  constructor(){
    super()    
    let shadow = this.attachShadow({mode: 'open'}) // DOM sombra
    
    this.divContent = document.createElement('section')
    
    shadow.appendChild(this.divContent)
  }


  static get styles() {
    return `        
      section{
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        margin: 1rem auto;
        max-width: 1280px;
      }
      .card{    
        border-radius: 8px;
        box-shadow: 0 0 4px 1px rgb(199, 198, 198);
        box-sizing: border-box;
        display: flex;
        overflow: hidden;
        max-width: 300px;
        padding: 8px;
        width: 100%;
      }
      .card_figure{
        display: flex;
        align-items: center;
      }
      .card_img{
        border-radius: 50%;
        box-shadow: 0 0 0 2px #fff;
        height: 80px;
        width: 80px;
      }
      .card_body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 4px 12px;
        width: 100%;
      }
      .card_text{
        margin: 0;
        text-transform: capitalize;
      }
      
      .btn_user{
        border-radius: 8px;
        border: none;
        background: #0abd0a;
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
        margin: 12px 0 8px;
        max-width: 70%;
        padding: 6px;
      }
    `
  }

  connectedCallback(){ 
    this.render()
  }

  render(){
    let url = this.getAttribute('data-url')
    this.divContent.innerHTML = `<style>${Card.styles}</style>`

    let promesa1 = fetch('https://reqres.in/api/users?page=1')
          .then( response => response.json())
          .then(json => json.data)

    let promesa2 = fetch('https://reqres.in/api/users?page=2')
              .then( response => response.json())
              .then(json => json.data)

    Promise.all([promesa1,promesa2])
      .then( user => {
        let arrayFusion = [...user[0],...user[1]]

        if(localStorage.getItem('arrayFusion')){
          localStorage.setItem('arrayFusion',JSON.stringify(arrayFusion))
          let cajonN = JSON.parse(localStorage.getItem('arrayFusion'))           
          cajonN.map(user => {
            this.divContent.innerHTML += `
            <div class="card">
                <div class="card_figure">
                  <img src='${user.avatar}' class="card_img">
              </div>
                <div class="card_body">
                  <strong class="card_text ">${user.first_name} ${user.last_name}</strong>            
                <span class="card_email">${user.email}</span>
                <button class="btn_user cta">Ver detalle</button>
              </div>
            </div>
            `
          })
        }
        else{
          console.log('no hay entradas en el local storage')
        }
       
      })  
  }

}

customElements.define('app-card', Card)


