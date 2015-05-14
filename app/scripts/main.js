'use strict';
$(document).ready(function() {
	$('#btnfutbolistas').click(function(){
		
		$.ajax({
			url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
			type: 'GET',
			dataType: 'json'
		})
		.done(function(futbolistas) {
			$.each(futbolistas, function(index, futbolista) {
				console.log(futbolista.nombre + ' ' + futbolista.apellido);
			});
		});
		

	});

});