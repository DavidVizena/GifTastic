$(document).ready(function () {
    // Global vars
    // 
    // Querry arr
    // 
    var heroesArr = ['Deadpool', 'Wolverine', 'Gambit', 'Spider-Man', 'Hulk', 'Thor', 'Captain America', 'Black Panther', 'Jean Grey', 'Black Widow'];
    // 
    // API vars
    var api = "http://api.giphy.com/v1/gifs/";
    var apiKey = "&api_key=wQgvm3ffxIrfYpTffgpuT9P404Qhn6HI";
    var userSearch = "search?q="
    var search = "ryan gosling"
    var limit = "&limit=10";
    var queryURL = api + userSearch + search + apiKey + limit;
    // 
    var hero;
    var query;
    var rating;



// $('card').click(() =>{
//     stuffHere;
// });

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
    });




    // document.ready closing
});