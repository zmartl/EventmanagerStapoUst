var uri = 'api/event';

$(document).ready(function () {
    // Send an AJAX request

    var id = $_GET("id");
    if (!id) return;

    $.getJSON(uri + "/" + id)
        .done(function (data) {
            loadTable(data);
        });
});

function loadTable(item) {    
    document.getElementById("eventName").value = item.eventName;
    document.getElementById("eventLocation").value = item.eventLocation;
    var cat = item.category;
    document.getElementById("eventCategory").value = cat.name;
    document.getElementById("eventStartTime").value = item.startDateTime;
    document.getElementById("eventEndTime").value = item.endDateTime;
}