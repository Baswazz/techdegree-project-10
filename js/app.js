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
    // console.log(data);
    const employees = data.results;
    console.log(employees);

    // Add employees to page
    let employeeHTML = '<ul>';
    $.each(employees, function(i, employee) {
        employeeHTML += '<li data-employee-id="' + i + '"><img src="' + employee.picture.large + '">';
        employeeHTML += '<div><h2>' + employee.name.first + ' ' + employee.name.last + '</h2>';
        employeeHTML += '<span>' + employee.email + '</span>';
        employeeHTML += '<span>' + employee.location.city + '</span></div></li>';
    }); // end each
    employeeHTML += '</ul>';
    $('#employees').append(employeeHTML);

    // Modal
    $('#employees li').click(function(evt) {
        // console.log(evt.target);
        const employeeID = $(this).data('employeeId');
        let employeeHTML = '<img src="' + employees[employeeID].picture.large + '">';
        employeeHTML += '<h2>' + employees[employeeID].name.first + ' ' + employees[employeeID].name.last + '</h2>';
        employeeHTML += '<span>' + employees[employeeID].login.username + '</span>';
        employeeHTML += '<span>' + employees[employeeID].email + '</span>';
        employeeHTML += '<span>' + employees[employeeID].location.city + '</span>';
        employeeHTML += '<span>' + employees[employeeID].cell + '</span>';
        employeeHTML += '<span>' + employees[employeeID].location.street + ', ' + employees[employeeID].location.postcode + '</span>';
        employeeHTML += '<span>' + employees[employeeID].dob + '</span>';
        console.log(employeeHTML);
            
        $('body').append('<div class="overlay"></div>');
        // $('body').css('overflow','hidden');
        $('.overlay').append('<div class="modal">' + employeeHTML +'</div>');
    });
});






