function secao(numero) {
  const secoes = [1, 2, 3];
  secoes.forEach(n => {
    const secao = document.getElementById(`secao${n}`);
    if (n === numero) {
      secao.classList.remove('hidden');
    } else {
      secao.classList.add('hidden');
    }
  });
}

function calcularBTUS() {
  const metros = document.getElementById("metros").value;
  const resultado = document.getElementById("resultado");

  if (metros && metros > 0) {
    const btus = metros * 650;
    resultado.textContent = `Resultado: ${btus} BTUS`;
  } else {
    resultado.textContent = "Por favor, insira uma metragem válida.";
  }
}

function tema() {
  const body = document.body;
  const botao = document.querySelector('.toggle-tema');

  if (body.classList.contains('tema-claro')) {
    body.classList.remove('tema-claro');
    body.classList.add('tema-escuro');
    botao.textContent = 'Claro';
  } else {
    body.classList.remove('tema-escuro');
    body.classList.add('tema-claro');
    botao.textContent = 'Escuro';
  }
}
