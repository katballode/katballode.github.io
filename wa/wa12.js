// Problem 1
const sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
  };
  
  const mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
  };
  
  const bill = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
  };
  
  function displayEmployeeInfo(employee) {
    console.log(`Name: ${employee.firstName}, Department: ${employee.department}, Designation: ${employee.designation}, Salary: ${employee.salary}`);
  }
  
  displayEmployeeInfo(sam);
  displayEmployeeInfo(mary);
  displayEmployeeInfo(bill);
  
  // Problem 2
  const techStarsEmployees = [sam, mary, bill];
  
  const techStars = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: techStarsEmployees,
  };
  
  console.log(techStars);
  
  // Problem 3
  const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false,
  };
  
  techStars.employees.push(anna);
  
  console.log(techStars);
  
  displayEmployeeInfo(anna); // Added Anna to the console log
  
  // Problem 4
  let totalSalary = 0;
  for (let i = 0; i < techStars.employees.length; i++) {
    totalSalary += techStars.employees[i].salary;
  }
  
  console.log(totalSalary);
  
  // Problem 5
  function giveRaise(employee) {
    if (employee.raiseEligible) {
      employee.salary *= 1.1;
      employee.raiseEligible = false;
    }
  }
  
  techStars.employees.forEach(giveRaise);
  console.log(techStars);
  
  // Problem 6
  const workingFromHome = ["Anna", "Sam"];
  
  techStars.employees.forEach((employee) => {
    employee.wfh = workingFromHome.includes(employee.firstName);
  });
  
  console.log(techStars);
  