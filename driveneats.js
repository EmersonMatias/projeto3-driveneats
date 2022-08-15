let escolhido1;
let escolhido2;
let escolhido3;
let preco1;
let preco2;
let preco3;
let total;

function prato_escolhido(escolhido){

    verde = document.querySelector('.comida .selecionado');
    const ativado1 = document.querySelector('.comida .ativar');
   
    

    if ( verde !== null  ){
        verde.classList.remove('selecionado'); 
    }
    if (ativado1 !== null){
        ativado1.classList.remove('ativar');
    }



    escolhido.classList.add('selecionado');
    escolhido.querySelector('.certo').classList.add('ativar');
    escolhido1 = escolhido.querySelector('h4').innerHTML;
    preco1 = Number(escolhido.querySelector('span').innerHTML);

    habilita();
}




function bebida_escolhido(escolhido){

    verde = document.querySelector('.bebida .selecionado');
    const ativado2 = document.querySelector('.bebida .ativar');
   
    
    if ( verde !== null  ){
        verde.classList.remove('selecionado'); 
    }
    if (ativado2 !== null){
        ativado2.classList.remove('ativar');
    }



    escolhido.classList.add('selecionado');
    escolhido.querySelector('.certo').classList.add('ativar');
    escolhido2 = escolhido.querySelector('h4').innerHTML;
    preco2 = Number(escolhido.querySelector('span').innerHTML);
    habilita();
   
}


function sobremesa_escolhido(escolhido){

    const verde = document.querySelector('.sobremesa .selecionado');
    const ativado3 = document.querySelector('.sobremesa .ativar');
   
    
    if ( verde !== null  ){
        verde.classList.remove('selecionado'); 
    }
    if (ativado3 !== null){
        ativado3.classList.remove('ativar');
    }



    escolhido.classList.add('selecionado');
    escolhido.querySelector('.certo').classList.add('ativar');
    escolhido3 = escolhido.querySelector('h4').innerHTML;
    preco3 = Number(escolhido.querySelector('span').innerHTML);
    habilita();

}
 



function finalizarpedido(){
    total = (preco1+preco2+preco3).toFixed(2);
    if(escolhido1 !== undefined && escolhido2 !== undefined && escolhido3 !== undefined){
        const nome = prompt('Por favor, digite seu nome?');
        const endereco = prompt('Por favor, digite seu endereço');
        const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${escolhido1}\n- Bebida: ${escolhido2}\n- Sobremesa: ${escolhido3}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`);
        window.location.href=`https://wa.me/5516936180339?text= ${mensagem}`;
        
      }

}

function habilita() {
  if(escolhido1 !== undefined && escolhido2 !== undefined && escolhido3 !== undefined){
    const habilitar = document.querySelector('.rodape');
    habilitar.querySelector('.botao').classList.add('fecharpedido');
  }
}
