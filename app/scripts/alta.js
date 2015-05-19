'use strict';
$(document).ready(function() {
    $('#frmalta').validate({
            rules: {
                nombre: {
                    required: true,
                    remote: 'http://www.futbolistas.com/users.php'
                },
                email: {
                    email: true,
                    required: true,
                    remote: 'http://www.futbolistas.com/emails.php'
                },
                email2: {
                    equalTo: '#email'
                },
                comentarios: {
                    required: true
                },
                url: {
                    url: true
                },
                edad: {
                    min: 0,
                    max: 110
                },
                nif:{
                    nifES: true
                },
                cuenta: {
                    iban:true
                }

            }
        }

    );
});

