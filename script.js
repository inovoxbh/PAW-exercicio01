function amplify(thumb) {
  /* altera imagem amplificada */
  document.querySelector('#amplified').src = thumb.target.src;
  
  /* limpa formatação do thumbnail anteriormente amplificado */
  var thumbnails = document.querySelectorAll('img');
  for (i = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].className == "thumbnails") {
      thumbnails[i].style.border = "5px outset gray";
    }
  }
  
  /* atribui formatação ao thumbnail amplificado */
  thumb.target.style.border = "8px inset green";
};

window.onload = function () {
  var thumbnails = document.querySelectorAll('img');
  for (i = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].className == "thumbnails") {
      thumbnails[i].addEventListener('click', amplify, false);
    }
  }
};