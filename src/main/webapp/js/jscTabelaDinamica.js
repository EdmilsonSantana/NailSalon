$(document).ready(function () {
    var i = 1;
    $("#add_row").click(function () {
        $('#addr' + i).html("<td><select class='form-control'> <option>Colorama</option> </td><td> <select class='form-control'><option>Vermelho</option> </select></td>");

        $('#tab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
        i++;
    });
    $("#delete_row").click(function () {
        if (i > 1) {
            $("#addr" + (i - 1)).html('');
            i--;
        }
    });

});