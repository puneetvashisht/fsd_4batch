class Employee {
    constructor(id, name, _salary) {
        this.id = id;
        this.name = name;
        this._salary = _salary;
        // this.id= id;
        // this.name = name;
        // this.salary = salary;
        Employee.count++;
    }
    set salary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        }
    }
    get salary() {
        return this._salary;
    }
    incrementSalary(incrementAmount) {
        this.salary = this.salary + incrementAmount;
        return true;
    }
}
// id: number;
// name: string;
// salary: number;
Employee.count = 0;
let emp = new Employee(33, "Ravi", 34333.33);
// emp.salary = -3;
emp.salary = 33;
console.log('Object count ', Employee.count);
let emp2 = new Employee(323, "Priya", 44333.33);
console.log('Object count ', Employee.count);
// emp.id = 33
// emp.name = "Ravi"
// emp.salary = 34343.34
console.log(emp);
// console.log(emp.name)
emp.incrementSalary(3000);
console.log(emp);
//# sourceMappingURL=employee.js.map