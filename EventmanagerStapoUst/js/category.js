var uri = 'api/category';

$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            loadTable(data);
        });
});

function loadTable(json) {
    $.each(json, function (key, item) {
        var table = document.getElementById('categoryTable');
        var row = table.insertRow(0);
        row.className = "clickable-row";
        row.setAttribute("onclick", "document.location = 'detail.html?id=" + item.id + "'");

        var category = row.insertCell(0);
        category.innerHTML = item.name;
    });
}

function find() {
    var id = $('#categoryId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            console.log(data);
            loadTable(data);
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#category').text('Error: ' + err);
        });
}