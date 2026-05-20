//CREAR LAS PROPIEDADES DEL OBJETO

let p = {
    
    teclas:document.querySelectorAll("#calculadora ul li"),
    accion:null,
    digito:null,
    operaciones:document.querySelector("#operaciones"),
    cantisignos:0,
    cantdecimal:false,
    resultado:false, 
}

//Crear los metodos
let m = {
    inicio:function()
    {
        for(let i = 0; i < p.teclas.length; i++ )
        {
            p.teclas[i].addEventListener("click",m.oprimirtecla)
        }

        document.addEventListener("keydown", function(e){
            let tecla = e.key;

            if(!isNaN(tecla)){
                m.calculadora("numero", tecla);
            }

            else if(["+", "-", "*", "/"].includes(tecla)){

            m.calculadora("simbolo", tecla);
        }

             else if(tecla == "."){

            m.calculadora("decimal", tecla);

        }

             else if(tecla == "r"){

            m.calculadora("raiz", "√");

        }

        else if(tecla == "s"){

        m.calculadora("seno", "sin");

        }

        else if(tecla == "c"){

        m.calculadora("coseno", "cos");

        }

        else if(tecla == "Enter"){

            m.calculadora("igual", "=");

        }
        else if(tecla == "Backspace"){

            p.operaciones.innerHTML =
            p.operaciones.innerHTML.slice(0, -1);

            if(p.operaciones.innerHTML == ""){
                p.operaciones.innerHTML = "0";
            }

        }
        else if(tecla == "Escape"){

            m.borrarCalculadora();

 }

    });

    },
    oprimirtecla: function(tecla)
    {
        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        console.log(p.digito);
        m.calculadora(p.accion,p.digito);

    },
    calculadora: function(accion,digito)
    {
        switch(accion)
        {
            case "numero":
                p.cantisignos = 0;


                //console.log("numero");
                if(p.operaciones.innerHTML == "0")
                {
                    p.operaciones.innerHTML = digito;;
                }else{
                    //p.operaciones.innerHTML += digito;
                    if(p.resultado){
                        p.resultado = false;
                        p.operaciones.innerHTML = digito;
                    }else{
                        p.operaciones.innerHTML += digito;
                    }
                }
            break;

            case "simbolo":
                 p.cantisignos++;
                 if(p.cantisignos == 1){

                    if(p.operaciones.innerHTML == "0"){
                        p.operaciones.innerHTML = "0";
                    }else{
                        p.operaciones.innerHTML += digito;
                        p.cantdecimal = false;
                    }
                 }
                //console.log("simbolo");
               
            break;

            case"decimal":
            if(!p.cantdecimal){
                p.operaciones.innerHTML += digito;
                p.cantdecimal = true;
            }
            //console.log("decimal");
            break;

            case "raiz":

            let valor = eval(p.operaciones.innerHTML);

            if(valor < 0){

            p.operaciones.innerHTML = "Error";

            }else{

             p.operaciones.innerHTML = Math.sqrt(valor);

            }

            p.resultado = true;

            break;

            case "seno":

            let valorSeno = eval(p.operaciones.innerHTML);

            p.operaciones.innerHTML = Math.sin(valorSeno * Math.PI / 180);

            p.resultado = true;

            break;

            case "coseno":

            let valorCoseno = eval(p.operaciones.innerHTML);

            p.operaciones.innerHTML = Math.cos(valorCoseno * Math.PI / 180);

            p.resultado = true;

            break;

            case "igual":

             // VALIDAR DIVISION POR 0
            if (p.operaciones.innerHTML.includes("/0")) {

                p.operaciones.innerHTML = "No se puede dividir";


             } else {

        p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
        p.resultado = true;

            }

            break;
            }

            
    },
    borrarCalculadora: function(){
        p.operaciones.innerHTML = "0";
    }
}

m.inicio();