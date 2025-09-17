// Seleciona os elementos
const video = document.getElementById("video");
const reproduzir = document.getElementById("reproduzir");
const pausar = document.getElementById("pausar");
const progresso = document.getElementById("progresso");
const tempo = document.getElementById("tempo");

// Reproduzir e pausar o vídeo
function alternarStatusDoVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Detectores de eventos
video.addEventListener("click", alternarStatusDoVideo);
