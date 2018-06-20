
/*function mostrar(){
 document.getElementById("display").innerHTML =;   
}
document.getElementById("0").onclick =  function mostrar();
document.getElementById("1").onclick =  function mostrar();
document.getElementById("2").onclick =  function mostrar();
document.getElementById("3").onclick =  function mostrar();
document.getElementById("4").onclick =  function mostrar();
document.getElementById("5").onclick =  function mostrar();
document.getElementById("6").onclick =  function mostrar();
document.getElementById("7").onclick =  function mostrar();
document.getElementById("8").onclick =  function mostrar();
document.getElementById("9").onclick =  function mostrar();
document.getElementById("+").onclick =  function mostrar();
document.getElementById("-").onclick =  function mostrar();
 

document.getElementById("on").onclick = "";
document.getElementById("sign").onclick = "";
document.getElementById("raiz").onclick = "";
document.getElementById("dividido").onclick = "";
document.getElementById("7").onclick = "7";
document.getElementById("8").onclick ="8";
document.getElementById("9").onclick = "9";
document.getElementById("por").onclick = "";
document.getElementById("4").onclick ="4";
document.getElementById("5").onclick ="5";
document.getElementById("6").onclick = "6";
document.getElementById("menos").onclick = "";
document.getElementById("1").onclick = "1";
document.getElementById("2").onclick = "2";
document.getElementById("3").onclick = "3";
document.getElementById("0").onclick = "0";
document.getElementById("punto").onclick = ".";
document.getElementById("igual").onclick ="";
document.getElementById("mas").onclick = "";


function (){
	document.getElementById("display").value = val;
    
}
function match (val){
    document.getElementById("1").onclick = 1;
}*/

//Declaramos variables
//var operandoa;
//var operandob;
//var operacion;



function numero(self) {
    document.getElementById("display").InnerHTML
}



var display = document.getElementById("display");
var operandos = {
    operador: "",
    operadorAnt: "",
    numAnt: 0
    };

var calculadora = {
  init: function(){
     var self = this;
     var on = document.getElementById("on");
     var sign = document.getElementById('sign');
     var raiz = document.getElementById('raiz');
     var mas = document.getElementById('mas');
     var menos = document.getElementById('menos');
     var por = document.getElementById('por');
     var div = document.getElementById('dividido');
     var igual = document.getElementById('igual');
     var punto = document.getElementById('punto');
     var uno = document.getElementById('1');
     var dos = document.getElementById('2');
     var tres = document.getElementById('3');
     var cuatro = document.getElementById('4');
     var cinco = document.getElementById('5');
     var seis = document.getElementById('6');
     var siete = document.getElementById('7');
     var ocho = document.getElementById('8');
     var nueve = document.getElementById('9');
     var cero = document.getElementById('0');
     
      cero.addEventListener("click", function(){
         self.numero("0");
        });
    
     cero.addEventListener("mousedown", function(){
     cero.setAttribute("style","transform:scale(0.95,0.95)");      });
     cero.addEventListener("mouseout", function(){
     cero.setAttribute("style","transform:scale(1,1)") ;   
        });                 
     uno.addEventListener("click", function(){
         self.numero("1");
        });
    
     uno.addEventListener("mousedown", function(){
     uno.setAttribute("style","transform:scale(0.95,0.95)");        });
     uno.addEventListener("mouseout", function(){
     uno.setAttribute("style","transform:scale(1,1)");
        });  
     dos.addEventListener("click", function(){
         self.numero("2");
          });
    
     dos.addEventListener("mousedown", function(){
     dos.setAttribute("style","transform:scale(0.95,0.95)");
         });
     dos.addEventListener("mouseout", function(){
     dos.setAttribute("style","transform:scale(1,1)");
        });  
     tres.addEventListener("click", function(){
         self.numero("3");
        });
    
     tres.addEventListener("mousedown", function(){
     tres.setAttribute("style","transform:scale(0.95,0.95)");         });
     tres.addEventListener("mouseout", function(){
     tres.setAttribute("style","transform:scale(1,1)");
         });  
     cuatro.addEventListener("click", function(){
         self.numero("4");
         });
    
     cuatro.addEventListener("mousedown", function(){
     cuatro.setAttribute("style","transform:scale(0.95,0.95)");  });
     cuatro.addEventListener("mouseout", function(){
     cuatro.setAttribute("style","transform:scale(1,1)") ;
         });  
     cinco.addEventListener("click", function(){
         self.numero("5");
         });
    
     cinco.addEventListener("mousedown", function(){
     cinco.setAttribute("style","transform:scale(0.95,0.95)");       });
     cinco.addEventListener("mouseout", function(){
     cinco.setAttribute("style","transform:scale(1,1)");
         });  
     seis.addEventListener("click", function(){
         self.numero("6");
         });
    
    seis.addEventListener("mousedown", function(){
    seis.setAttribute("style","transform:scale(0.95,0.95)");
         });
    seis.addEventListener("mouseout", function(){
    seis.setAttribute("style","transform:scale(1,1)");
        });  
    siete.addEventListener("click", function(){
         self.numero("7");
         });
    
    siete.addEventListener("mousedown", function(){
    siete.setAttribute("style","transform:scale(0.95,0.95)");
          });
    siete.addEventListener("mouseout", function(){
    siete.setAttribute("style","transform:scale(1,1)");
         });  
    ocho.addEventListener("click", function(){
         self.numero("8");
          });
    
    ocho.addEventListener("mousedown", function(){
    ocho.setAttribute("style","transform:scale(0.95,0.95)");
         });
    ocho.addEventListener("mouseout", function(){
    ocho.setAttribute("style","transform:scale(1,1)");
        }); 
    nueve.addEventListener("click", function(){
         self.numero("9");
          });
    
    nueve.addEventListener("mousedown", function(){
    nueve.setAttribute("style","transform:scale(0.95,0.95)");        });
    nueve.addEventListener("mouseout", function(){
    nueve.setAttribute("style","transform:scale(1,1)");
        });  
    sign.addEventListener("click", function(){
         self.numero("");
          });
    
    sign.addEventListener("mousedown", function(){
    sign.setAttribute("style","transform:scale(0.95,0.95)");        });
    sign.addEventListener("mouseout", function(){
    sign.setAttribute("style","transform:scale(1,1)");
        });
      raiz.addEventListener("click", function(){
         self.numero("");
          });
    
    raiz.addEventListener("mousedown", function(){
    raiz.setAttribute("style","transform:scale(0.95,0.95)");        });
    raiz.addEventListener("mouseout", function(){
    raiz.setAttribute("style","transform:scale(1,1)");
        });
      mas.addEventListener("click", function(){
         self.numero("+");
          });
    
    mas.addEventListener("mousedown", function(){
    mas.setAttribute("style","transform:scale(0.95,0.95)");        });
    mas.addEventListener("mouseout", function(){
    mas.setAttribute("style","transform:scale(1,1)");
        });
     menos.addEventListener("click", function(){
         self.numero("-");
          });
    
    menos.addEventListener("mousedown", function(){
    menos.setAttribute("style","transform:scale(0.95,0.95)");        });
    menos.addEventListener("mouseout", function(){
    menos.setAttribute("style","transform:scale(1,1)");
        });
      por.addEventListener("click", function(){
         self.numero("*");
          });
    
    por.addEventListener("mousedown", function(){
    por.setAttribute("style","transform:scale(0.95,0.95)");        });
    por.addEventListener("mouseout", function(){
    por.setAttribute("style","transform:scale(1,1)");
        });
      div.addEventListener("click", function(){
         self.numero("/");
          });
    
    div.addEventListener("mousedown", function(){
    div.setAttribute("style","transform:scale(0.95,0.95)");        });
    div.addEventListener("mouseout", function(){
    div.setAttribute("style","transform:scale(1,1)");
        });
      punto.addEventListener("click", function(){
         self.numero(".");
          });
    
    punto.addEventListener("mousedown", function(){
    punto.setAttribute("style","transform:scale(0.95,0.95)");        });
    punto.addEventListener("mouseout", function(){
    punto.setAttribute("style","transform:scale(1,1)");
        });
      igual.addEventListener("click", function(){
         self.numero("=");
          });
    
    igual.addEventListener("mousedown", function(){
    igual.setAttribute("style","transform:scale(0.95,0.95)");        });
    igual.addEventListener("mouseout", function(){
    igual.setAttribute("style","transform:scale(1,1)");
        });
      on.addEventListener("click", function(){
         self.numero("0");
          });
    
    on.addEventListener("mousedown", function(){
    on.setAttribute("style","transform:scale(0.95,0.95)");        });
    on.addEventListener("mouseout", function(){
    on.setAttribute("style","transform:scale(1,1)");
        });
      } 
    } 
     
     
     
     
     
     
     
     
     
     
     
     
     
 /*    
//Eventos de click
  uno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
  }
  reset.onclick = function(e){
      resetear();
  }
  suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
  }
  function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}*/
  