
// llamado modal
let modal = document.querySelector('app-modal')
let abrir = document.querySelector('#open')
let cerrar = document.querySelector('#close')

abrir.addEventListener('click', (e) => {
  e.preventDefault()
  modal.open()
})

cerrar.addEventListener('click', (e) => {
  e.preventDefault()
  modal.close()
})
