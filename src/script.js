// CALCULAR GORJÉTA



// LOCALIZANDO OS INPUTS
let valorConta = document.getElementById("billValue");
let customGorjeta = document.getElementById("customValue");
let numPessoas = document.getElementById("numberPeople");

// FUNÇÃO PARA ESTAR CALCULANDO GORJETA
function calcularGorjeta() {

    // NOVAS VARIÁVEIS PARA ESTAR DEFININDO OS VALORES PADRÃO DOS INPUT
    const contaUser = parseFloat(valorConta.value) || 0;
    let porcentage = parseInt(customGorjeta.value) || 0;
    const QtdPessoas = parseInt(numPessoas.value) || 1;


    let Buttons = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5'].map(id => document.getElementById(id));
    Buttons[0].addEventListener('click', function () {
        porcentage = 5;
        calcularTotais();
    });
    Buttons[1].addEventListener('click', function () {
        porcentage = 10;
        calcularTotais();
    });
    Buttons[2].addEventListener('click', function () {
        porcentage = 15;
        calcularTotais();
    });
    Buttons[3].addEventListener('click', function () {
        porcentage = 20;
        calcularTotais();
    });

    Buttons[4].addEventListener('click', function () {
        porcentage = 35;
        calcularTotais();
    });

    function calcularTotais() {
        const totalGorjetaPorPessoa = (contaUser * (porcentage / 100)) / QtdPessoas;
        const totalPorPessoa = (contaUser + totalGorjetaPorPessoa) / QtdPessoas;

        document.getElementById('totalContaUser').innerText = totalGorjetaPorPessoa.toFixed(2);
        document.getElementById('totalGorjeta').innerText = totalPorPessoa.toFixed(2);
    }
    calcularTotais();
}
valorConta.addEventListener('input', calcularGorjeta);
numPessoas.addEventListener('input', calcularGorjeta);
customGorjeta.addEventListener('input', calcularGorjeta);
