let food;

function selectFood(botao){
    const elemento = document.querySelector('.plates .selecionado');
    if(elemento !== null){
        elemento.classList.remove('selecionado');
    }
    
    botao.classList.add('selecionado');

   food = botao.innerHTML;

   habilitarCompra();   
}

let drink;

function selectDrink(botao){
    const elemento = document.querySelector('.gas .selecionado');

    if (elemento !== null){
        elemento.classList.remove ('selecionado');
    }

    botao.classList.add('selecionado');

    drink = botao.innerHTML;

    habilitarCompra(); 
}

let dessert;

function selectDessert (botao){
    const elemento = document.querySelector('.kind .selecionado');

    if(elemento !== null){
        elemento.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');

    dessert = botao.innerHTML;

    habilitarCompra();   
}

function habilitarCompra(){

    if (food !== undefined && drink !== undefined && dessert !== undefined){

        const botao = document.querySelector('.ballon'); 
        botao.classList.add('fechar-pedido');

        const paragrafo = document.querySelector('.finalizar');
        paragrafo.innerHTML = `Fechar o seu pedido`;
    }      
}

let nameFood;
let valueFood;

function clickComida(botao){
    nameFood = botao.querySelector('.nameFood').innerHTML;
    valueFood = botao.querySelector('.valueFood').innerHTML;
    valueFood = Number(valueFood);
}

let nameDrink;
let valueDrink;

function acionarBebida(botao){
    nameDrink = botao.querySelector('.nameDrink').innerHTML;
    valueDrink = botao.querySelector('.valueDrink').innerHTML;
    valueDrink = Number(valueDrink);
}

let nameDessert;
let valueDessert;

function executarSobremesa(botao){
    nameDessert = botao.querySelector('.nameDessert').innerHTML;
    valueDessert = botao.querySelector('.valueDessert').innerHTML;
    valueDessert = Number(valueDessert);
}

let soma = 0
let resultado = Number(soma);

function executeOrder() {

    if (food !== undefined && drink !== undefined && dessert !== undefined){
    const nome = prompt("Qual o seu nome?");
    const endereco = prompt("Qual o seu endereço?");
    soma = valueFood + valueDrink + valueDessert;
    const link = "https://wa.me/5511996807608?text=" + encodeURIComponent( 
        `Ola, gostaria de fazer o pedido:\n- Prato: ${nameFood}\n- Bebida: ${nameDrink}\n- Sobremesa: ${nameDessert}\n- Total: ${soma}\nNome: ${nome}\nEndereço: ${endereco}`    
    );

    window.open(link);
    } 
}

   



