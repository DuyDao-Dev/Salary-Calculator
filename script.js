
$(document).ready(onReady);



let employeeArray= [];
console.log(employeeArray);

function onReady(){
    console.log("Starting the weekend challenge!");

    //create form to input employee's firstName, lastName, idNumber, employeeTitle, annualSalary.
    // finished this in HTML

    //create a SUBMIT button to send to the DOM. Should clear form when click on SUBMIT. 
    //Should also collect that information to calculate monthly cost of combined salaries 
    //***(so should divide by 12 to get month ly cost and display in DOM). Also needs to put a 
    //red background if > $20,000
    $( '#submit' ).on( 'click', submitEmployee );
    //
}



function submitEmployee(){
//the employee object
//document.getElementById('firstName').value// this would how it would look without jQuery
let employee = {
    firstName: $('#firstName').val(), 
    lastName: $('#lastName').val(),
    employeeID: $('#employeeID').val(), 
    employeeTitle: $('#employeTitle').val(),
    annualSalary: $('#annualSalry').val(), 
}

employeeArray.push(employee);

//draw the table
markup = "<tr id=employeeRow"+employee.employeeID+">" //opening row tag, identify a row by the employeeID
markup += "<td>"+employee.firstName+"</td>" // one cell in that row //first Name
markup += "<td>This is a row</td>" // one cell in that row //Last Name
markup += "<td>This is a row</td>" // one cell in that row //first Name
markup += "<td>This is a row</td>" // one cell in that row //first Name
markup += "<td>This is a row</td>" // one cell in that row //first Name
markup += "<td> <button id="+employee.employeeID+" onClick='deleteRow(event)'>Delete</button></td>" // one cell in that row //Delete a  button

markup += "</tr>"; // closing row tag
tableBody = $("#employeeTable");
tableBody.append(markup);
                
console.log(employeeArray)
}

function deleteRow(e){
	/* console.log(e.target.id) */
	console.log('delete employee ID:' + e.target.id)
$( "#employeeRow"+e.target.id).remove();
  
}

function salaryCalc (){
    $('#annualSalary').append('<p>class="box"</p>')
    //need to print to DOM annual salary and something to calculate the monthly.
}

function clearBoxes (){
$('.submit-employees').empty();
}