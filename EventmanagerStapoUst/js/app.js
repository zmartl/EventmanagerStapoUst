var uri = 'api/event';

$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            $.each(data, function (key, item) {
                var table = document.getElementById('eventTable');
                var row = table.insertRow(0);
                row.className = "clickable-row";
                row.setAttribute("onclick", "document.location = 'index?id=" + item.id + "'");

                var name = row.insertCell(0);
                name.innerHTML = item.eventName;                

                var location = row.insertCell(1);
                location.innerHTML = item.eventLocation;

                var startDate = row.insertCell(2);
                startDate.innerHTML = moment(item.startDateTime).format("DD.MM.YYYY HH:mm");

                var endDate = row.insertCell(3);
                endDate.innerHTML = moment(item.endDateTime).format("DD.MM.YYYY HH:mm");

                var permission = row.insertCell(4);
                permission.innerHTML = item.permission;
            });
        });
});

function find() {
    var id = $('#eventId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#event').text(data.eventName);
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#event').text('Error: ' + err);
        });
}