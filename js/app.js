// $.ajax({
//     url: 'https://randomuser.me/api/?results=12',
//     dataType: 'json',
//     success: function(data) {
//         console.log(data);
//         var employeeHTML = '<ul>';
//         $.each(data.results, function(i, employee) {
//             employeeHTML += '<li>' + '<img src="' + employee.picture.large + '">';
//             employeeHTML += '<div><h2>' + employee.name.first + ' ' + employee.name.last + '</h2>';
//             employeeHTML += '<span>' + employee.email + '</span>';
//             employeeHTML += '<span>' + employee.location.city + '</span></div></li>';
//         }); // end each
//         employeeHTML += '</ul>';
//         $('#employees').append(employeeHTML);
//     }
// });

const randomUserAPI = 'https://randomuser.me/api/?results=12';
const randomUserOptions = {
    dataType: 'json',
};

$.getJSON(randomUserAPI, randomUserOptions, function(data) {
    console.log(data);
    let employeeHTML = '<ul>';
    $.each(data.results, function(i, employee) {
        employeeHTML += '<li>' + '<img src="' + employee.picture.large + '">';
        employeeHTML += '<div><h2>' + employee.name.first + ' ' + employee.name.last + '</h2>';
        employeeHTML += '<span>' + employee.email + '</span>';
        employeeHTML += '<span>' + employee.location.city + '</span></div></li>';
    }); // end each
    employeeHTML += '</ul>';
    $('#employees').append(employeeHTML);

    $('#employees li').click(function(evt) {
        console.log(evt.target);
        $('body').append('<div class="overlay"></div>');
        $('body').css('overflow','hidden');


        $('.overlay').append('<div class="modal">Hoi</div>');
    });
});






