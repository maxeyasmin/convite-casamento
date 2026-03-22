// Fade ao rolar
const faders = document.querySelectorAll('.fade');
const audio = document.getElementById("musica");
const btn = document.getElementById("btnAudio");

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


// tenta autoplay
window.addEventListener("load", () => {
    audio.play()
        .then(() => {
            // Tocou sozinho → garante que o botão fique escondido
            btn.style.display = "none";
        })
        .catch(() => {
            // Não tocou (Safari) → mostra botão
            btn.style.display = "flex";
        });
});

// função para ativar áudio
const ativarAudio = () => {
    audio.muted = false;
    audio.currentTime = 0;

    audio.play().then(() => {
        btn.style.display = "none";
    });

    document.removeEventListener("touchstart", ativarAudio);
};

// eventos
btn.addEventListener("click", ativarAudio);
document.addEventListener("touchstart", ativarAudio);
