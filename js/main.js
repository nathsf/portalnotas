$(document).ready(function () {
    $('.datepicker').datepicker(); 
});

$(document).ready(function () {
    var table = $('#notas').DataTable(
        {
            responsive: true,
            "language": {
                "lengthMenu": "#Filas _MENU_ ",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "zeroRecords": "No se encontró resultados",
                "info": "#Registros: _TOTAL_ ",
                "infoEmpty": "No se encontró resultados",
                "infoFiltered": "(filtrados de _MAX_ registros)",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "search": "Buscar:",
                "searchPlaceholder": "Buscar por nombre, código, etc."
            }
        }
    );
    new $.fn.dataTable.FixedHeader( table );
    
});