const randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us,gb,nl';
const randomUserOptions = {
    dataType: 'json',
};
    
function employees(data) {
    // console.log(data.results);
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
        employeeHTML = '<img src="' + employee[id].picture.large + '">';
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

    let employeeID;
    // Show modal
    $('#employees li').click(function() {
        employeeID = $(this).data('employeeId');
        $('.overlay').css('display', 'block');
        $('body').css('overflow','hidden');
        $('.modal-content').append(displayEmployee(data.results, employeeID));
        if (employeeID === 0) {
            $('.arrow-left').css('display', 'none');
        } else if (employeeID === data.results.length - 1) {
            $('.arrow-right').css('display', 'none');
        }
    });

    // Close modal
    $('.close').click(function() {
        $('.overlay').css('display', 'none');
        $('body').css('overflow', '');
        $('.modal-content').empty();
    });

    $('.arrow-left').click(function() {
        employeeID += -1;
        $('.modal-content').empty();
        $('.modal-content').append(displayEmployee(data.results, employeeID));
        if (employeeID !== 0) {
            $('.arrow-left').css('display', 'none');
        } else {
            $('.arrow-left').css('display', 'block');
        }
    });

    $('.arrow-right').click(function() {
        employeeID += 1;
        $('.modal-content').empty();
        $('.modal-content').append(displayEmployee(data.results, employeeID));
        if (employeeID === data.results.length - 1) {
            $('.arrow-right').css('display', 'none');
        } else {
            $('.arrow-right').css('display', 'block');
        }
    });

};

$.getJSON(randomUserAPI, randomUserOptions, employees);