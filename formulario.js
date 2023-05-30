const btnEnviar = document.querySelector('.btn-enviar');
const inputs = document.querySelectorAll('.input');
const avisos = document.querySelectorAll('.aviso');

btnEnviar.addEventListener('click', () =>{
    inputs.forEach((input , index) => {
        if(input.value !== ""){
            input.classList.add('preenchido');
            input.classList.remove('nao-preenchido');
            avisos[index].classList.remove('visivel');   
        }else if(input.value === ""){
            input.classList.add('nao-preenchido');
            input.classList.remove('preenchido');
            avisos[index].classList.add('visivel');
        }
    });
});
