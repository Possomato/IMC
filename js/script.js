import { calularImc } from "./imc.js"
import { fecharModal, botaoFechar, pressionarEsc } from "./fechar-modal.js"

const form = document.querySelector('#form')
const botaoClose = document.querySelector('.close')
const modalWrapper = document.querySelector('.modal-wrapper')
const alertaErro = document.querySelector('.alerta-erro')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

botaoFechar(botaoClose, () => fecharModal(modalWrapper, inputPeso, inputAltura));
pressionarEsc(document, () => fecharModal(modalWrapper, inputPeso, inputAltura));


form.addEventListener('submit', function(event){
  event.preventDefault()
  calularImc(inputPeso, inputAltura, alertaErro, modalWrapper)
})

