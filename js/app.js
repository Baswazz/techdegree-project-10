var users = $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
        console.log(data.results[0]);
    }
});

// var randomUserAPI = 'https://randomuser.me/api/?results=12';
// var randomUserOptions = {
//     dataType: 'json'
// };

// $.getJSON(randomUserAPI, randomUserOptions, log);

// function log (data) {
//     console.log(data);
// }