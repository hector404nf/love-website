function startProgress() {
    let progressBar = document.querySelector('.progress-bar');
    let loader = document.querySelector('.loader');
    let percentageText = document.querySelector('.percentage');
    let startButton = document.querySelector('.start-btn'); // Seleccionamos el botón
    let finalMessage = document.querySelector('.final-message'); // Mensaje final
    let progress = 0;

    startButton.style.display = 'none'; // Ocultamos el botón al hacer clic

    let interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            loader.style.display = 'none'; // Ocultamos la barra de progreso
            finalMessage.style.display = 'block'; // Mostramos el mensaje final
        } else {
            progress += 5;
            progressBar.style.width = progress + "%";
            percentageText.textContent = progress + "%";
        }
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    // Verifica si el elemento con la clase effect-text existe
    var effectText = document.querySelector('.effect-text');
    
    if (effectText) {
      heartAnimation(effectText);
    } else {
      console.error('El elemento .effect-text no se encuentra en el DOM');
    }
  });
  
  function randomNum(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }
  
  function heartAnimation(effectText) {
    var heartCount = (effectText.offsetWidth / 50) * 5;
    for (var i = 0; i < heartCount; i++) {
      var heartSize = (randomNum(60, 120) / 10);
      effectText.innerHTML += '<span class="tiny-heart" style="top: ' + randomNum(40, 80) + '%; left: ' + randomNum(0, 100) + '%; width: ' + heartSize + 'px; height: ' + heartSize + 'px ; animation-delay: -' + randomNum(0, 3) + 's; animation-duration: ' + randomNum(2, 5) + 's"></span>';
    }
  }
  

