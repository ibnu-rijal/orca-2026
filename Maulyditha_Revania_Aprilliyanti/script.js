const container = document.getElementById ('container');
const RegisterBtn = document.getElementById ('Register');
const LoginBtn = document.getElementById ('Login');

RegisterBtn.addEventListener('click', ()=> {
    container.classList.add("active");
});

LoginBtn.addEventListener('click', ()=> {
    container.classList.remove("active");
});