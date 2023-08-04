export const fecharModal = (modalWrapper, inputPeso, inputAltura) => {
  modalWrapper.style.display = 'none'
  
  inputPeso.value = ''
  inputAltura.value = ''
}

export const botaoFechar = (botaoClose, fecharModal) => {
  botaoClose.addEventListener('click', fecharModal)
}

export const pressionarEsc = (document, fecharModal) => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      fecharModal();
    }
  });
}
