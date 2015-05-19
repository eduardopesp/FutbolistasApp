'use strict';
$(document).ready(function() {
    $('#btnfutbolistas').click(function() {
        var $boton = $(this);
        $.ajax({
                url: 'http://www.futbolistas.com/futbolistas.php',
                type: 'GET',
                dataType: 'json'
            })
            .done(function(futbolistas) {
                var fila, filas;
                $.each(futbolistas, function(index, futbolista) {
                    $.each(futbolista, function(index, val) {
                        /* index será nombre, apellido, posición 
						en value tendremos los valores
			 		 */
                        if (index === 'imagen') {
                            fila += '<td><img class="img-responsive" src="http://www.futbolistas.com/img/' + val + '"/></td>';
                        } else if (index === 'desc') {
                            fila += '<td> <a href="#" data-toggle="tooltip" data-placement="top" title="' + val + '">' +  val.substr(0,50) + ' [...]</a></td>';
                        } else {
                            fila += '<td>' + val + '</td>';
                        }


                    });

                    filas += '<tr>' + fila + '</tr>';
                    fila = '';
                });
                $boton.fadeOut('slow', function() {
                    $('#tablaFutbolistas').append(filas)
                        .fadeIn('slow', function() {
                            $('[data-toggle="tooltip"]').tooltip();
                        });
                });

            });



    });



});
