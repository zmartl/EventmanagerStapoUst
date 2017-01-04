var uri = 'api/event';

$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            // On success, 'data' contains a list of products.
            $.each(data, function (key, item) {
                // Add a list item for the product.
                $('<li>', { text: formatItem(item) }).appendTo($('#events'));
            });
        });
});

function formatItem(item) {
    return item.EventName + ' ' + item.EventLocation;
}

function find() {
    var id = $('#eventId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#event').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#event').text('Error: ' + err);
        });
}