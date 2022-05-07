export class Expense {
  constructor(name, amount, type = "service", id = Math.random(1000)) {
    this.name = name;
    this.type = type;
    this.amount = parseFloat(amount);
    this.id = id;
  }
}

export class Expenses {
  constructor(...expenses) {
    this.items = expenses;
    this.monthlyExpense = this.items.reduce((a, b) => a + b.amount, 0);
    this.yearlyExpense = this.monthlyExpense * 12;
  }
}
