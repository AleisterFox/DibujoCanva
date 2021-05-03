var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;




function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = texto.value;
    lineas = parseInt(lineas);
    console.log(lineas);
    var l = 0;
    var y, x, a;
    var salto = ancho/lineas;
    for(l; l < lineas; l++)
    { 
        y = salto * l;
        x = salto * (l+1);

        a = 300 - y;
        dibujarLinea('blue',0,y,x,300);
        dibujarLinea('blue',y,0,300,x);
        dibujarLinea('red',a,0,0,x );
        dibujarLinea('red',300,y,a,300);
    }

    dibujarLinea('blue',1,1,1,299);
    dibujarLinea('blue',1,299,299,299);
    dibujarLinea('red',299,299,299,1);
    dibujarLinea('red',299,1,1,1);

}