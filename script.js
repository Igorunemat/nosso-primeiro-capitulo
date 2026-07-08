const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");
const musica = document.getElementById("musica");

const frasesIntro = [
  "Algumas histórias...",
  "...mudam a nossa vida.",
  "A minha começou quando encontrei você."
];

let fraseAtual = 0;

function mostrarIntro() {
  introText.textContent = frasesIntro[fraseAtual];

  setTimeout(() => {
    introText.style.opacity = "0";

    setTimeout(() => {
      fraseAtual++;

      if (fraseAtual < frasesIntro.length) {
        introText.textContent = frasesIntro[fraseAtual];
        introText.style.opacity = "1";
        mostrarIntro();
      } else {
        intro.classList.add("hide");
      }
    }, 700);
  }, 1500);
}

window.addEventListener("load", () => {
  introText.style.transition = "opacity .7s ease";
  mostrarIntro();
});

startBtn.addEventListener("click", () => {
  document.getElementById("inicio").scrollIntoView({
    behavior: "smooth"
  });
});

let tocando = false;

musicBtn.addEventListener("click", () => {
  if (!tocando) {
    musica.play();
    musicBtn.textContent = "⏸ Pausar música";
    tocando = true;
  } else {
    musica.pause();
    musicBtn.textContent = "🎵 Nossa música";
    tocando = false;
  }
});

const revealElements = document.querySelectorAll(
  ".page-content span, .page h2, .page p, .timeline-card, .cards div, .verse span, .verse p"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.18
});

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const finalSection = document.querySelector(".final");
const finalTexts = document.querySelectorAll(".final p");

const finalObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      finalTexts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.add("show");
        }, index * 750);
      });
    }
  });
}, {
  threshold: 0.45
});

finalObserver.observe(finalSection);
const inicioNamoro = new Date("2025-07-08T17:20:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - inicioNamoro;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const futureBtn = document.getElementById("futureBtn");
const futureModal = document.getElementById("futureModal");
const closeFuture = document.getElementById("closeFuture");

futureBtn.addEventListener("click", () => {
  futureModal.classList.add("open");
});

closeFuture.addEventListener("click", () => {
  futureModal.classList.remove("open");
});