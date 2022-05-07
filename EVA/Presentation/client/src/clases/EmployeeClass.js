export class Employee {
  constructor(
    position,
    monthlySalary,
    id = Math.random(1000),
    jobDescription = "-",
    contractType = "fijo",
    paymentFrecuency = "monthly",
    department = "-"
  ) {
    this.position = position;
    this.monthlySalary = parseFloat(monthlySalary);
    this.JobDescription = jobDescription;
    this.yearlySalary = monthlySalary * 12;
    this.contractType = contractType;
    this.paymentFrecuency = paymentFrecuency;
    this.depeartment = department;
    this.id = id;
  }
}

export class Payroll {
  constructor(...employees) {
    this.payroll = employees;
    this.monthlyPayroll = this.payroll.reduce((a, b) => a + b.monthlySalary, 0);
    this.yearlyPayroll = this.monthlyPayroll * 12;
  }
}
