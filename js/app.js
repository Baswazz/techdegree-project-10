const randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us,gb,nl';
const randomUserOptions = {
    dataType: 'json',
};
    
function employees(data) {
    let employeeHTML = '<ul>';
    $.each(data.results, function(i, employee) {
        employeeHTML += '<li data-employee-id="' + i + '"><img src="' + employee.picture.large + '">';
        employeeHTML += '<div><h2>' + employee.name.first + ' ' + employee.name.last + '</h2>';
        employeeHTML += '<span>' + employee.email + '</span>';
        employeeHTML += '<span>' + employee.location.city + '</span></div></li>';
    }); // end each
    employeeHTML += '</ul>';
    $('#employees').append(employeeHTML);

    // Employee details

    function displayEmployee(employee, id) {
        let employeeHTML = '<span class="close">&times;</span>';
        employeeHTML += '<span class="arrow-left">&larr;</span>';
        employeeHTML += '<span class="arrow-right">&rarr;</span>';
        employeeHTML += '<img src="' + employee[id].picture.large + '">';
        employeeHTML += '<h2>' + employee[id].name.first + ' ' + employee[id].name.last + '</h2>';
        employeeHTML += '<span>' + employee[id].login.username + '</span>';
        employeeHTML += '<span>' + employee[id].email + '</span>';
        employeeHTML += '<span>' + employee[id].location.city + '</span>';
        employeeHTML += '<span class="line"></span>';
        employeeHTML += '<span>' + employee[id].cell + '</span>';
        employeeHTML += '<span>' + employee[id].location.street + ', ' + employee[id].location.postcode + '</span>';
        employeeHTML += '<span>' + employee[id].dob + '</span>';
        return employeeHTML;
    };

    // Show modal
    $('#employees li').click(function() {
        const employeeID = $(this).data('employeeId');
        $('.modal').append(displayEmployee(data.results, employeeID));
        $('.overlay').css('display', 'block');
        $('body').css('overflow','hidden');
    });

    // Close modal
    $('.close').click(function() {
        console.log('test');
    });

};


$('.arrow-left, .arrow-right').click(function(evt) {
    console.log('test');
});

$.getJSON(randomUserAPI, randomUserOptions, employees);






