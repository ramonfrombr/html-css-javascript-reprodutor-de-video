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

// Alterna entre ícones de pausa e reprodução dependendo do status do vídeo
function atualizarIconeDeReproducao() {
  if (video.paused) {
    reproduzir.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    reproduzir.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Detectores de eventos
video.addEventListener("click", alternarStatusDoVideo);
video.addEventListener("pause", atualizarIconeDeReproducao);
video.addEventListener("play", atualizarIconeDeReproducao);
