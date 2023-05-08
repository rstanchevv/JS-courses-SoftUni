function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputData = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      let bestWorkersElement = document.querySelector('#workers p');
      let restaurantsObject = {};
      for (const row of inputData) {
         let [restaurant, employees] = row.split(" - ");
         if (!restaurantsObject.hasOwnProperty(restaurant)){
         restaurantsObject[restaurant] = {};
         restaurantsObject[restaurant].salaries = [];
         }
         let employeeSplit = employees.split(", ");
         for (let i = 0; i < employeeSplit.length; i++){
            let [employee, salary] = employeeSplit[i].split(" ");
            restaurantsObject[restaurant][employee] = salary;
            restaurantsObject[restaurant].salaries.push(Number(salary));
         }
      }
      let restaurants = Object.keys(restaurantsObject);
      let averageSalary = Number.MIN_SAFE_INTEGER;
      let bestRestaurant = '';
      let maxSalary = 0;
      for (const restaurant of restaurants) {
         if (getAverage(restaurantsObject[restaurant].salaries) > averageSalary){
            averageSalary = getAverage(restaurantsObject[restaurant].salaries);
            bestRestaurant = restaurant;
            maxSalary = Math.max(...restaurantsObject[restaurant].salaries);
            bestRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`
            delete restaurantsObject[restaurant].salaries;
         }
      }
      let sortedWorkerSalaries = Object.entries(restaurantsObject[bestRestaurant]).sort(([worker, salary], [worker2, salary2]) => salary2 - salary);
      for (const [worker, salary] of sortedWorkerSalaries) {
         bestWorkersElement.textContent += `Name: ${worker} With Salary: ${salary} `
      }
      
   }
   function getAverage(arr){
      return arr.reduce((a,b) => a + b, 0) / arr.length;
   }
}