var elementoTermometro = document.querySelector(".termometro");
var termometro = new Termometro();

termometro.getValor(15,20);
termometro.elemento = elementoTermometro;
termometro.init();