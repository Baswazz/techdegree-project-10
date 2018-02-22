const randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us,gb,nl';
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
        const employeeID = $(this).data('employeeId');
        const employeeIDNext = employeeID + 1;
        const employeeIDPrev = employeeID - 1;

        
        let employeeHTML = '<span class="close">&times;</span>';
        employeeHTML += '<span class="arrow-left">&larr;</span>';
        employeeHTML += '<span class="arrow-right">&rarr;</span>';
        employeeHTML += '<img src="' + employees[employeeID].picture.large + '">';
        employeeHTML += '<h2>' + employees[employeeID].name.first + ' ' + employees[employeeID].name.last + '</h2>';
        employeeHTML += '<span>' + employees[employeeID].login.username + '</span>';
        employeeHTML += '<span>' + employees[employeeID].email + '</span>';
        employeeHTML += '<span>' + employees[employeeID].location.city + '</span>';
        employeeHTML += '<span class="line"></span>';
        employeeHTML += '<span>' + employees[employeeID].cell + '</span>';
        employeeHTML += '<span>' + employees[employeeID].location.street + ', ' + employees[employeeID].location.postcode + '</span>';
        employeeHTML += '<span>' + employees[employeeID].dob + '</span>';
            
        $('.overlay').css('display', 'block');
        $('body').css('overflow','hidden');
        $('.modal').append(employeeHTML);

        $('.arrow-left, .arrow-right').click(function(evt) {
            
        });

        // Close modal when user clicks outside anywhere
        $('.close').click(function(evt) {
            $('.overlay').css('display', 'none');
            $('body').css('overflow','');
            $('.modal').empty();
        });
    });
});






