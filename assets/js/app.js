$(document).ready(function () {
    // var pieces of API, leaving query on the end of it to make an array
    var api = "https://api.giphy.com/v1/gifs/";
    var apiKey = "&api_key=wQgvm3ffxIrfYpTffgpuT9P404Qhn6HI";
    var limit = "&limit=10";
    var query = "search?q=ryan+gosling";
    // var html combines all of the pieces to give you the full HTML link
    var queryURL = api + query + apiKey + limit;
    // 

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
    });

    // document.ready closing
});