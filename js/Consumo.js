(function(w){
	
   var y = 0; 
	
   function ligar_L_C() {
 	  var x = document.getElementById("CM").value;
 	  y += x; //removido o var daqui, para o acesso ser realizado do y da closure



  }
  function desligar_L_C() {
    document.getElementById("CM").value = 0;
  
  }
  
  //aconselho criar um objeto para gerenciar isso, mas enquanto não tem, estou expondo as funcoes
  
  w.ligar_L_C = ligar_L_C;
  w.desligar_L_C = desligar_L_C;
  
}(window));
