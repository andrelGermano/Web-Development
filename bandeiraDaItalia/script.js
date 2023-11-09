document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("italyFlag");
    const context = canvas.getContext("2d");
  
    // Desenha a bandeira da Itália
    drawItalyFlag(context);
  });
  
  function drawItalyFlag(context) {
    // Desenha a faixa verde
    context.fillStyle = "#009246";
    context.fillRect(0, 0, 200, 400);
  
    // Desenha a faixa branca
    context.fillStyle = "#FFFFFF";
    context.fillRect(200, 0, 200, 400);
  
    // Desenha a faixa vermelha
    context.fillStyle = "#CE2B37";
    context.fillRect(400, 0, 200, 400);
  }
  