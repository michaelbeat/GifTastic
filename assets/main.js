

const API_BASE_URL = "http://api.giphy.com/v1/gifs/search?q=";
const API_KEY = "&api_key=dc6zaTOxFJmzC";
var themes = ["Marine Corps", "Army", "Navy"];

function queryGiphy(q) {
    if (q) {
        q = q.replace(/ /g, "%20");
        var query = `q=${q}`;
    } else {
        var query = ""
    }
    var options = {
        method: "GET",
        url: `${API_BASE_URL}/images:${query}${API_KEY}&limit=10`
    }

    $.ajax(options)
        .then(function(data){
            console.log('Here is the data from the api call');
            console.log(data);
            // processImages(data);
        })
        .catch(function(error){
            console.log(error);
        });
}

function searchListener() {
    $('#btn').click(function(event){
        event.preventDefault();
        var query = $('#search').val();
        print(`Query: ${query}`);
        queryGiphy(query);
    });
}

searchListener();

function processImages(data) {
    $('#art').empty();
    data.records.forEach(function(element){
        var url = element.fixed_height.url;
        var image = `<img src="${url}"></img>`;
        $('#art').append(image);
    });
}