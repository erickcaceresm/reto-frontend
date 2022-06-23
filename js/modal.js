class Modal extends HTMLElement {
  constructor(){
    super()
    this.attachShadow({mode:'open'})
    this.render()
  }

  render(){
    const style = `
    <style>
    .modal_container{
      align-items: center;
      background: rgba(0,0,0, 0.5);
      justify-content: center;
      display: flex;
      height: 100vh;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
      display: none
    }
    .modal{
      background: #fff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36%;
      position: relative;
      transition: transform .8s;
      transform: translateY(0);
      width: 36%;
    }
    .btn_close{
      position: absolute;
      cursor: pointer;
      top: 10px;
      right: 20px;
      background-color: red;
      border-radius: 50%;
      font-weight: 700;
      color: #fff;
      width: 20px;
      height: 20px;
      text-align: center;
      padding: 3px;
      font-size: 14px;
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
    </style>
    `

    const template = `
    <section class="modal_container">
      <div class="modal modal_close">
        <p class="btn_close" id="">X</p>
        <div class="card">
            <div class="card_figure">
              <img src='https://reqres.in/img/faces/1-image.jpg' class="card_img">
          </div>
            <div class="card_body">
              <strong class="card_text ">George Bluth</strong>            
            <span class="card_email">george.bluth@reqres.in</span>            
          </div>
        </div>        
      </div>
    </section>
    `

    this.shadowRoot.innerHTML = `${style} ${template}`
  }

  open(){
    this.shadowRoot.querySelector('.modal_container').style.display = 'flex'
  }

  close(){
    this.shadowRoot.querySelector('.modal_container').style.display = 'none'
  }
}

customElements.define('app-modal', Modal)