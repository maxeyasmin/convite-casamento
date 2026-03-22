// Fade ao rolar
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add('aparecer');
        }
    });
});

// Contador regressivo
const dataCasamento = new Date("May 09, 2026 00:00:00").getTime();

const x = setInterval(function() {
  const agora = new Date().getTime();
  const distancia = dataCasamento - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML = dias + " dias";

}, 1000);

// RSVP (INTEGRAÇÃO GOOGLE SHEETS)
function confirmar(){
    const nome = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML =
    "Presença confirmada, " + nome + " 💛";

    fetch("https://script.google.com/macros/s/AKfycbz-31KSI_ufO10kTEAKZpaBYcw5kMr_gbgbWaBGab2donEHcFFbaW0rs3r6CAff5mxKCg/exec", {
        method: "POST",
        body: JSON.stringify({nome: nome}),
    });
}

function copiarPix(botao) {
    const chave = "63992110692";

    navigator.clipboard.writeText(chave).then(() => {
        botao.innerText = "Chave PIX copiada! 💛";

        setTimeout(() => {
            botao.innerText = "Presentear";
        }, 2000);
    });
}

function entrar() {
    const musica = document.getElementById("musica");

    musica.play().then(() => {
        // esconde capa
        document.getElementById("capa").style.display = "none";

        // mostra convite
        document.getElementById("convite").style.display = "block";
    }).catch(() => {
        alert("Toque na tela para ativar a música 🎶");
    });
}
