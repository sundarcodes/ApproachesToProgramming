'use strict';

class Employee{
	constructor(name,salary){
		this.name = name;
		this.salary = salary;
	}
	printInfo(){
		console.log(this.name+' gets '+this.salary);
	}
	updateSalary(amt){
		this.salary=amt;
	}
	getSalary(){
		return this.salary; 
	}

}

class SalaryUpdater{
	constructor(employeesList){
		this.employeesList=employeesList;
	}
	updateSalaries(fn){
	var i = 0;
	var len = employeesList.length;
	for(i=0;i<len;i++){
		employeesList[i].updateSalary(fn(employeesList[i].getSalary()));
		employeesList[i].printInfo();	
		}
	}
}


function addBonus(amt){
	return function(salary){
		return salary+amt;
	}
}

function addIncrement(percentage){
	return function(salary){
		return salary+(salary*percentage*0.01);	
	}
	
}

var employeesList=[];
var emp = new Employee('Emp1',1000);
employeesList.push(emp);
var emp = new Employee('Emp2',2000);
employeesList.push(emp);
var emp = new Employee('Emp3',3000);
employeesList.push(emp);
var emp = new Employee('Emp4',4000);
employeesList.push(emp);
var emp = new Employee('Emp5',3000);
employeesList.push(emp);

var salaryUpdater = new SalaryUpdater(employeesList);
salaryUpdater.updateSalaries(addBonus(10000));
console.log('****************');
salaryUpdater.updateSalaries(addIncrement(10));



