import { mostrarAlertaErro } from "./alert-erro.js"

export const calularImc = (inputPeso, inputAltura, alertaErro, modalWrapper) => {
  let peso = inputPeso.value
  let altura = inputAltura.value

  const textModalWrapper = document.querySelector('.text-modal-wrapper')

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
    mostrarAlertaErro(alertaErro)
  } else{
    const calculoImc = peso / ((altura/100) ** 2)
    textModalWrapper.innerText = `Seu IMC é ${calculoImc.toFixed(2)}`
    modalWrapper.style.display = 'grid'
  }
}