let profissao = 'Dev front-end';
let idade = 28;
let xp = 'Júnior';

let informacoes = {
  whats: '11961802437',
  github: 'https://github.com/ygos-96',
  linkedin: 'https://www.linkedin.com/in/ygor-gs2006/',
  CV: 'https://teste.com.br'
};

let texto =
  `<span class='keyword'>let</span> <span class='variable'>profissão</span> = <span class='string'>'${profissao}'</span>\n` +
  `<span class='keyword'>let</span> <span class='variable'>idade</span> = <span class='string'>${idade}</span>\n` +
  `<span class='keyword'>let</span> <span class='variable'>xp</span> = <span class='string'>'${xp}'</span>\n\n` +
  `<span class='keyword'>let</span> <span class='variable'>informacoes</span> = {\n` +
  `    whats: <a class='link' href='https://wa.me/${informacoes.whats}' target='_blank'><span>${informacoes.whats}</span></a>,\n` +
  `    github: <a class='link' href='${informacoes.github}' target='_blank'>www.github.com/ygos-96</a>,\n` +
  `    linkedIn: <a class='link' href='${informacoes.linkedin}' target='_blank'>www.linkedin.com/ygor-gs2006</a>,\n` +
  `    CV: <a class='link' href='${informacoes.CV}' target='_blank'>clique para baixar</a>\n};`;

export default function typeEffect() {
  const container = document.getElementById('typing');
  if (!container) return;

  function startTyping() {
    container.innerHTML = '';
    let index = 0;

  function addChar() {
    if (index < texto.length) {
      container.innerHTML = texto.substring(0, index + 1);
      index++;
      requestAnimationFrame(addChar);
    } else {
      container.innerHTML = texto;
      setTimeout(startTyping, 10000);
    }
  }

  addChar();
}

startTyping();
}
