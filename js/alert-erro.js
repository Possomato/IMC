export const mostrarAlertaErro = (divAlertaErro) => {
  divAlertaErro.style.transform = 'translateY(0px)';
  setTimeout(() => {
    divAlertaErro.style.transform = 'translateY(-30px)';
  }, 3000);
};