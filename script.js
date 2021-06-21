
$(document).ready(onReady);



let employeeArray= [];
console.log(employeeArray);

function onReady(){
    console.log("Starting the weekend challenge!");

    $( '#submit' ).on( 'click', submitEmployee );
}



function submitEmployee(){
//the employee object
//document.getElementById('firstName').value// this would how it would look without jQuery
let employee = {
    firstName: $('#firstName').val(), 
    lastName: $('#lastName').val(),
    employeeID: $('#employeeID').val(), 
    employeeTitle: $('#employeeTitle').val(),
    annualSalary: Number($('#annualSalary').val()), 
}

employeeArray.push(employee);
salaryCalc();

//draw the table
markup = "<tr id=employeeRow"+employee.employeeID+">" //opening row tag, identify a row by the employeeID
    markup += "<td>"+employee.firstName+"</td>" // one cell in that row //first Name
    markup += "<td>"+employee.lastName+"</td>" // one cell in that row //Last Name
    markup += "<td>"+employee.employeeID+"</td>" // one cell in that row //ID Number
    markup += "<td>"+employee.employeeTitle+"</td>" // one cell in that row //Title
    markup += "<td id= money>"+employee.annualSalary+"</td>" // one cell in that row //Annual Salary
    markup += "<td> <button id="+employee.employeeID+" onClick='deleteRow(event)'>Delete</button></td>" // one cell in that row //Delete a  button
markup += "</tr>"; // closing row tag
tableBody = $("#employeeTable");
tableBody.append(markup);
$('#firstName').val('');//is there a way to consolidate this?
$('#lastName').val('');
$('#employeeID').val('');
$('#employeeTitle').val('');
$('#annualSalary').val('');
console.log(employeeArray)
}

function deleteRow(e){
	/* console.log(e.target.id) */
	console.log('delete employee ID:' + e.target.id)
$( "#employeeRow"+e.target.id).remove();
$( '#monthlyCost'+e.target.id).remove();//Trying to deduct from monthly payment
	//still need to find and remove from employeeArray
  //need to loop through employeeArray
  //find the employeeID that matches e.target.id
  //remove that specific index from the array
  //to remove use the splice function
  //employeeArray.splice(matchingIndex, 1);
  for (let index = 0; index < employeeArray.length; index++) {
    const employee = employeeArray[index];
    	if (employee.employeeID==e.target.id){
      		var matchingIndex = index;//why does var work and not let?
          break;
      }
 }
 console.log(matchingIndex);
employeeArray.splice(matchingIndex, 1);
}

function salaryCalc (){
    let totalSalary = 0;
    //I need to add total of all employees' annualSalary and then divide by 12
    for (let index = 0; index < employeeArray.length; index++) {
        const employeeSalary = employeeArray[index]['annualSalary'];
        totalSalary += employeeSalary;//need total first
    }
    totalSalary = totalSalary / 12;//then divide by 12
    $('#monthlyCost').html('Total Monthly: ' + 
    (totalSalary).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',}));//Got help with this since I couldn't figure out
    //how to do commas and decimal limit. Pretty cool that they have one
    //depending on the country you're in. 
    
    //I need something to remove totalSalary when clicking on delete button or maybe create a function
    //and nest it near the delete button to call upon. Tate did give a good idea where it would run a 
    //function to the total salary of all employees. 
    
    //create an if condition where it changes the background to red if total monthly is over $20,000.
    // // if (totalSalary > 20000){
    // //     alert ('You are over the limit!');// this works but we need to change background red.
    // }
}


console.log(employeeArray);

