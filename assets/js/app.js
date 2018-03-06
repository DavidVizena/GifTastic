$(document).ready(function () {
    // Global vars
    // 
    // Querry arr
    var heroesArr = ['Deadpool', 'Wolverine', 'Gambit', 'Spider-Man', 'Hulk', 'Thor', 'Captain America', 'Black Panther', 'Jean Grey', 'Black Widow'];
    var res;
    // 
    // API vars
    function displayHeroInfo() {

        var api = "https://api.giphy.com/v1/gifs/";
        var apiKey = "&api_key=wQgvm3ffxIrfYpTffgpuT9P404Qhn6HI&limit=";
        var userSearch = "search?q="
        var hero = $(this).attr("data-name");
        var limit = 10;
        var queryURL = api + userSearch + hero + apiKey + limit;
        console.log(queryURL);
        // http://api.giphy.com/v1/gifs/search?q=deadpool&api_key=wQgvm3ffxIrfYpTffgpuT9P404Qhn6HI&limit=10
        //
        // AJAX for hero that gets clicked
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            res = response;
            // 
            // Other vars
            $("#heroes-view").empty();
            $.each(response.data, (index, item) => {
                $("heroes-view").empty();
                var heroDiv = $("<div>").addClass("hero");
                var rating = item.rating;
                var ratingText = $("<p>").text("Rating: " + rating);
                heroDiv.append(ratingText);
                var imgURL = item.images.original_still.url;
                var image = $("<img>").attr({
                    "src": imgURL,
                    "value": index
                });
                image.addClass("gifImage");
                heroDiv.append(image);
                $("#heroes-view").prepend(heroDiv);
            })
        });
        // 
    }

    $("#heroes-view").on("click", ".gifImage", function () {
        var index = $(this).attr("value");
        var animated = res.data[index].images.original.url;
        if ($(this).attr("src") === res.data[index].images.original_still.url) {
            $(this).attr("src", animated);
        } else {
            $(this).attr("src", res.data[index].images.original_still.url)
        }
    });

    // This creates the new buttons from Jquery
    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < heroesArr.length; i++) {
            var a = $("<button>");
            a.addClass("hero-btn");
            a.attr("data-name", heroesArr[i]);
            a.text(heroesArr[i]);
            $("#buttons-view").append(a);
        }
    }
    // 

    // This func injects when a hero button is clicked
    $("#add-hero").on("click", (event) => {
        event.preventDefault();
        var hero = $("#hero-input").val().trim();
        heroesArr.push(hero);
        renderButtons();
    });
    // 
    // Adding a click event listener to all elements with a class of "hero-button"


    $("#buttons-view").on("click", ".hero-btn", displayHeroInfo);
    renderButtons();
    // 
    // document.ready closing
});
