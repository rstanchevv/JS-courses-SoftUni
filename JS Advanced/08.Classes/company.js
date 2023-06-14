class Company{
    constructor(){
        this.departments = {};
    }
    addEmployee(name, salary, position, department){
        if (name === '' || name === null || name === undefined || salary === '' || salary === null || salary === undefined || position === '' || position === null || position === undefined  || department === '' || department === null || department === undefined){
            throw new Error('Invalid input!')
        }
        if (salary < 0){
            throw new Error('Invalid input!')
        }
        if (!this.departments.hasOwnProperty(department)){
            this.departments[department] = [];
        }
        let employee = {
            name,
            salary,
            position
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    bestDepartment(){
        let maxAvgSalary = Number.MIN_SAFE_INTEGER;
        let bestDepartment = ''
        let result = ''
        for (const department of Object.keys(this.departments)) {
            let salarySum = 0;
            for (const employee of this.departments[department]) {
                salarySum += employee.salary;
            }
            if(salarySum / this.departments[department].length > maxAvgSalary){
                maxAvgSalary = (salarySum / this.departments[department].length).toFixed(2)
                bestDepartment = department
            } 
        }
        result += `Best Department is: ${bestDepartment}\n`;
        result += `Average salary: ${maxAvgSalary}\n`;
        let sorted = this.departments[bestDepartment].sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name))
        for (const best of sorted) {
            result += `${best.name} ${best.salary} ${best.position}\n`
        }
        return result.trim()
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
