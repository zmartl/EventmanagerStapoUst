var uri = 'api/event';

$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            loadTable(data);
        });
});

function loadTable(json) {
    $.each(json, function (key, item) {
        var table = document.getElementById('eventTable');
        var row = table.insertRow(0);
        row.className = "clickable-row";
        row.setAttribute("onclick", "document.location = 'detail.html?id=" + item.id + "'");

        var name = row.insertCell(0);
        name.innerHTML = item.eventName;

        var location = row.insertCell(1);
        location.innerHTML = item.eventLocation;

        var category = row.insertCell(2);
        category.innerHTML = item.category.name;

        var startDate = row.insertCell(3);
        startDate.innerHTML = moment(item.startDateTime).format("DD.MM.YYYY HH:mm");

        var endDate = row.insertCell(4);
        endDate.innerHTML = moment(item.endDateTime).format("DD.MM.YYYY HH:mm");

        var permission = row.insertCell(5);
        permission.innerHTML = '<a href="' + item.permission + '"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Donwload</a>';
    });
}

function find() {
    var id = $('#eventId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            console.log(data);
            loadTable(data);
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#event').text('Error: ' + err);
        });
}