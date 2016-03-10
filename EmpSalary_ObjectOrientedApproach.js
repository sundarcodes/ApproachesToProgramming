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
	addBonus(bonusAmt){
	var i = 0;
	var len = employeesList.length;
	for(i=0;i<len;i++){
			employeesList[i].updateSalary(employeesList[i].getSalary()+bonusAmt);
			employeesList[i].printInfo();
		}
	}
	addIncrement(percentage){
	var i = 0;
	var len = employeesList.length;
	for(i=0;i<len;i++){
			var incrementedSalary=employeesList[i].getSalary()+
			(percentage*employeesList[i].getSalary()*0.01);
			employeesList[i].updateSalary(incrementedSalary);
			employeesList[i].printInfo();
		}
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
salaryUpdater.addBonus(10000);
console.log('****************');
salaryUpdater.addIncrement(10);


