/*
    1. Click sobre imagen Thumbnail.
    2. Tomar el valor del atributo "href" de la etiqueta "anchor".
    3. Guardar dicho valor en una variable con nombre "imagenOriginal".
    4. Cambiar el valor del atributo "src" de la imagen principal por el valor del atributo 
    "href" que tenemos guardada en la variable "imagenOriginal".
*/

/*
    El método "ready" de jQuery asegura que el código JS se ejecutará cuando el árbol "DOM"
    del HTML esté renderizado.

    La sintaxis de la función anonima de Java Script es:
        function() {}

    La sintaxis del método "ready" de jQuery es:
        $( "función anónima" )
        
        es decir:
        $(function() {})

    El código escrito adentro de las llaves, es el código que se va a ejecutar cuando el 
    "DOM" del HTML esté renderizado.

    $( function(){
        //code here..
    });

    Método "on" de jQuery sirve para escuchar eventos por ejemplo "click,
    doubleclick, scroll," entre otros. La sintaxis es:

    elemento.on( evento a escuchar, código a ejecutar);

    por lo tanto :
        elemento.on(evento, función anonima);

    la sintaxis queda:
        elemento.on('click', function() {})
    
    El método "preventDefault()" del evento (event) bloque el comportamiento 
    por defecto que tenga el elemento que desencadena el evento "click".

    El método "attr()" de jQuery funciona para:
        1. Para devolvernos el valor del atributo especificado, es decir
        recibe un párametro, el cual es el nombre del atributo del que 
        queremos obtener su valor.

        elemento.attr('href');

        2. Para cambiar el valor del atributo especificado, es decir
        recibe dos párametros:
        - Nombre del atributo que queremos modificar.
        - El nuevo valor para este atributo.

        elemento.attr('href', 'images/img-2.jpg');
*/

$(function () {
    var imgMini = $('.img-mini');
    var imgPrincipal = $('#imgPrincipal');

    imgMini.on('click', function (event) {
        event.preventDefault();
        var imagenOriginal = $(this).attr('href');

        imgPrincipal.attr('src', imagenOriginal);
    });
});