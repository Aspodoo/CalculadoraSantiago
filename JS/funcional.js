// CREAR LAS PROPIEDADES DEL OBJETO

let p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantisignos: 0,
    cantdecimal: false,
    resultado: false

};

// CREAR LOS METODOS

let m = {

    inicio:function()
    {
        for (let i = 0; i < p.teclas.length; i++) 
        {
            p.teclas[i].addEventListener("click", m.oprimirtecla);
        }
    },

    oprimirtecla:function(tecla)
    {
        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;

        m.calculadora();
    },

    calculadora:function()
    {

        switch(accion)
        {

            case "numero":
                console.log("numero");
            break;

            case "simbolo":
                console.log("simbolo");
            break;

            case "decimal":
                console.log("decimal");
            break;

            case "igual":
                console.log("igual");
            break;

        }

    }

};

// INICIAR

m.inicio();