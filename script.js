// Pegando os campos do html.
const input = document.getElementById('result');
const botao = document.querySelectorAll('.botao');
const operators = document.querySelectorAll('#operadores');
const igual = document.querySelector('.igual');
const dot = document.getElementById('dot');
const limpar = document.getElementById('limpar');
const limparTecla = document.getElementById('limparTecla');

// Declarando as variaveis auxiliares.
let numero = true;
let numeroAnterior;
let operacao;


// Imprime na tela o numero clicado.
function atualizaTela(event)
{
    if(numero)
    {
        numero = false;
        input.textContent = event;
    }
    else
    {
        input.textContent += event;
    }
}


// Inseri um numero na tela.
function insert(num)
{
    atualizaTela(num.target.textContent);
}


// Elimina um numero por vez.
function limpaString() 
{
    input.textContent = input.textContent.slice(0, -4);
}


// Limpa a tela.
function limparTela()
{
    input.textContent = '';
}

// Pega o operador desejado e o numero que esta na tela.
function operador(event)
{
    if(!numero){
        numero = true;
        operacao = event.target.textContent;
        numeroAnterior = parseFloat(input.textContent);
        input.textContent += operacao;
    }
}


const decimal = () => input.textContent.indexOf('.') !== -1;


// Impede que o ponto seja colocado mais de uma vez ou sem um numero na frente.
function ponto() 
{
    if (!decimal()) {
        if (input.textContent.length > 0) {
            atualizaTela('.');
        }

        else {
            atualizaTela('0.');
        }
    }
}


// Faz o calculo da operação.
function calculo()
{
        var number = parseFloat(input.textContent);
        var total;

        switch(operacao)
        {
            case '+':
                total = numeroAnterior + number;
                atualizaTela(total);
                break;
            case '-':
                total = numeroAnterior - number;
                atualizaTela(total);
                break;
            case 'x':
                total = numeroAnterior * number;
                atualizaTela(total);
                break;
            case '/':
                total = numeroAnterior / number;
                atualizaTela(total);
                break;
            default:
                break;
        }
}


// Exibe o resultado na tela.
function resultado() 
{
    numero = true;
    calculo();

    // Limpa o resultado e inseri um novo numero clicado.
    if(input.textContent.length > 0)
    {
        numero = true;
        botao.forEach(element => {
            element.addEventListener('click', insert);
        });
    }
}


// Faz o evento de click.
botao.forEach(element => {
    element.addEventListener('click', insert);
});


operators.forEach(event => {
    event.addEventListener('click', operador);
});

igual.addEventListener('click', resultado);

dot.addEventListener('click', ponto);

limpar.addEventListener('click', limparTela);

limparTecla.addEventListener('click', limpaString);
