var Employees = [
{
	name:'Emp1',
	salary: 5000
},
{
	name:'Emp2',
	salary: 9000
},
{
	name:'Emp3',
	salary: 3500
},
{
	name:'Emp4',
	salary: 2000
},
{
	name:'Emp5',
	salary: 3000
},
{
	name:'Emp6',
	salary: 2000
},
{
	name:'Emp7',
	salary: 2000
},
{
	name:'Emp8',
	salary: 8000
},

{
	name:'Emp9',
	salary: 6000
},
{
	name:'Emp10',
	salary: 5700
}
];


// Functional approach to this problem

// Identify what is going to be changing and what is going to be constant.
// Here in our example, updation of salaries is going to be constant but how you 
// update is going to change. So apply a function which is going to handle the change 
// for you to each of the elements of the array.
// Here we write a function updateSalary which takes array and a function. 
// This function updateSalary is going to handle the constant part of 
// going through the array and updating the salaries of each employee
// The function passed to this updateSalary() is going to take care of 
// how to update the salary. The value passed



function updateSalary(empArr,fn){
	totEmployees =	empArr.length;
	for(i=0;i<totEmployees;i++){
		empArr[i].salary = fn(empArr[i].salary);
		console.log(empArr[i].name+' gets '+empArr[i].salary);
	}
}


// If I want to add 10000 USD bonus to all employees,

function addBonus(amt){
	return function(salary){
		return salary+amt;
	}
}

updateSalary(Employees,addBonus(10000));


function addIncrement(percentage){
	return function(salary){
		return salary+(salary*percentage*0.01);	
	}
	
}

// If I want to give 10% increment to all employees
updateSalary(Employees,addIncrement(10));






