$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        $('.text').html(data.message);
    }).fail(function() {
        alert("Error loading JSON file.");
    });

    $('.container').on('click', function() {
        $(this).toggleClass('open');
    });
});

