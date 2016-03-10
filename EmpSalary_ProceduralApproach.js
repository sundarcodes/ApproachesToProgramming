// Problem
// You have a start up with 20 employees. Your start up is doing really great and you want to reward your employees.
// So you announce a bonus of 10000 USD for all your employees.
// Now you have write a small program to update salaries of all employees.


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


// Procedural approach to programming

// Now if you want to add a bonus of 10000 USD to all employees
addBonus(Employees,10000);

function addBonus(empArr,bonusAmount){

	// your function to update salaries here
	totEmployees =	empArr.length;
	for(i=0;i<totEmployees;i++){
		empArr[i].salary =	empArr[i].salary+bonusAmount;
		console.log(empArr[i].name+' gets '+empArr[i].salary);
	}
}

// Now if you want to add an increment of 10% to all employees
addIncrement(Employees,10);

function addIncrement(empArr,incrementPercent){

	totEmployees =	empArr.length;
	for(i=0;i<totEmployees;i++){
		empArr[i].salary +=	empArr[i].salary*incrementPercent*0.01;
		console.log(empArr[i].name+' gets '+empArr[i].salary);
	}

}

