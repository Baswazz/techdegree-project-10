const randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us,gb,nl';
const randomUserOptions = {
    dataType: 'json',
};
    
function employees(data) {
    // console.log(data.results);
    let employeeHTML = '<ul>';
    $.each(data.results, function(i, employee) {
        employeeHTML += '<li data-employee-id="' + i + '"><img src="' + employee.picture.large + '">';
        employeeHTML += '<div><h2 class="employee-name">' + employee.name.first + ' ' + employee.name.last + '</h2>';
        employeeHTML += '<span>' + employee.email + '</span>';
        employeeHTML += '<span>' + employee.location.city + '</span></div></li>';
    }); // end each
    employeeHTML += '</ul>';
    $('#employees').append(employeeHTML);

    // Employee details

    function displayEmployee(employee, id) {
        employeeHTML = '<img src="' + employee[id].picture.large + '">';
        employeeHTML += '<h2>' + employee[id].name.first + ' ' + employee[id].name.last + '</h2>';
        employeeHTML += '<span>' + employee[id].login.username + '</span>';
        employeeHTML += '<span>' + employee[id].email + '</span>';
        employeeHTML += '<span>' + employee[id].location.city + '</span>';
        employeeHTML += '<span class="line"></span>';
        employeeHTML += '<span>' + employee[id].cell + '</span>';
        employeeHTML += '<span>' + employee[id].location.street + ', ' + employee[id].location.postcode + ', ' + employee[id].nat + '</span>';
        employeeHTML += '<span>' + employee[id].dob + '</span>';
        return employeeHTML;
    };

    let employeeID;
    // Show modal
    $('#employees li').click(function() {
        employeeID = $(this).data('employeeId');
        $('.overlay').css('display', 'block');
        $('body').css('overflow','hidden');
        $('.modal-content').append(displayEmployee(data.results, employeeID));
    });

    // Close modal
    $('.close').click(function() {
        $('.overlay').css('display', 'none');
        $('body').css('overflow', '');
        $('.modal-content').empty();
    });

    // Modal navigation
    $('.arrow-left').click(function() {        
        if (employeeID !== 0) {
            employeeID += -1;
            $('.modal-content').empty();
            $('.modal-content').append(displayEmployee(data.results, employeeID));
        } else {
            // Show last employee
            employeeID = employeeID = data.results.length - 1;
            $('.modal-content').empty();
            $('.modal-content').append(displayEmployee(data.results, employeeID));
        }
    });

    $('.arrow-right').click(function() {
        if (employeeID !== data.results.length - 1) {
            employeeID += 1;
            $('.modal-content').empty();
            $('.modal-content').append(displayEmployee(data.results, employeeID));
        } else {
            employeeID = 0;
            $('.modal-content').empty();
            $('.modal-content').append(displayEmployee(data.results, employeeID));
        }
    });

    $('form').submit(function(evt) {
        evt.preventDefault();
        console.log('test');
        const searchField = $('#search');
        const employeeName = $('.employee-name');
        $.each(employeeName, function() {
            console.log($(this).text());
            if (!searchField.val().includes(employeeName)) {
                $('#employee-name').parents('li').css('display', 'none');

            }
        });

    });

};

$.getJSON(randomUserAPI, randomUserOptions, employees);