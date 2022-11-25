function verificaChutePossuiValorValido(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }
  if (numeroMenor(numero)) {
    elementoChute.innerHTML += `<div>
    Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}
    </div>
    `;
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <main>
    <h2>Acertou !!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">
      Jogar novamente
    </button>
    </main>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="bi bi-arrow-down-circle-fill"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="bi bi-arrow-up-circle-fill"></i></div>
    `;
  }
}
function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
  if(e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})
