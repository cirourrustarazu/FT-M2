$(document).ready(function () {
    // Al hacer clic en el botón "Ver Amigos", se cargará la lista de amigos desde el servidor
    $('#boton').click(function () {
        $.ajax({
            url: 'http://localhost:5000/amigos',
            method: 'GET',
            success: function (data) {
                // Limpia la lista anterior y muestra la lista de amigos obtenida del servidor
                $('#lista').empty();
                data.forEach(function (amigo) {
                    $('#lista').append('<li> Nombre: ' + amigo.name + '</li>');
                });
            },
            error: function () {
                // Maneja errores en la solicitud
                $('#lista').html('Error al cargar la lista de amigos.');
            }
        });
    });

    // Al hacer clic en el botón "Buscar", busca un amigo por ID
    $('#search').click(function () {
        const amigoId = $('#input').val();
        $.ajax({
            url: 'http://localhost:5000/amigos/' + amigoId,
            method: 'GET',
            success: function (amigo) {
                if (amigo) {
                    $('#amigo').html('ID: ' + amigo.id + ', Nombre: ' + amigo.name);
                } else {
                    $('#amigo').html('Amigo no encontrado');
                }
            },
            error: function () {
                $('#amigo').html('Error al buscar el amigo.');
            }
        });
    });

    // Al hacer clic en el botón "Delete", borra un amigo por ID
    $('#delete').click(function () {
        const amigoId = $('#inputDelete').val();
        
        $.ajax({
            url: 'http://localhost:5000/amigos/' + amigoId,
            method: 'DELETE',
            success: function () {
                $('#success').html('Amigo eliminado correctamente.');
            },
            error: function () {
                $('#success').html('Error al eliminar el amigo.');
            }
        });
    });
});
