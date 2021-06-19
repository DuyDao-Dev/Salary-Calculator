$(document).ready(onReady);

let employee = {
    first: firstName, 
    last: lastName,
    number: employeeID,
    title: employeeTitle,
    salary: annualSalary
}

function onReady(){
    console.log("Starting the weekend challenge!");

    //create form to input employee's firstName, lastName, idNumber, employeeTitle, annualSalary.

    //create a SUBMIT button to send to the DOM. Should clear form when click on SUBMIT. 
    //Should also collect that information to calculate monthly cost of combined salaries 
    //***(so should divide by 12 to get month ly cost and display in DOM). Also needs to put a 
    //red background if > $20,000
    $( '#submit' ).on( 'click', submitEmployee );
    //
}

function submitEmployee(employee){
    console.log(employee)
    $('.submit-employee').on('click', submit)
    $('.submit-employee').empty();
}

function monthlyCalc (){
    $('#annualSalary').append('<p>class="box"</p> >')
}

