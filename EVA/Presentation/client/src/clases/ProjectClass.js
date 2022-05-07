import { Products } from "./ProductClass";
import { Payroll } from "./EmployeeClass";
import { Expenses } from "./ExpenseClass";
import { Assets } from "./AssetClass";

export default class Project {
  constructor(
    projectName = "AnonimusProject",
    industry,
    products,
    payroll,
    expenses,
    assets
  ) {
    this.projectName = projectName; //string
    this.industry = industry; //string
    this.contingencyPercent = 0.08; // percent of contigency t add to the budget
    this.products = products; //object array
    this.payroll = payroll; //object array
    this.expenses = expenses; //object array
    this.assets = assets; //object array

    const EquilibriumByUnits = () =>
      this.products.prodsMetrics.map((prod) => {
        return {
          product: prod.producto,
          price: prod.salePrice,
          Equ:
            (this.monthlyFlow.fixedExpenses /
              this.products.totalPondarateMargin) *
            (prod.participacion / 100),
          eqAmount:
            (this.monthlyFlow.fixedExpenses /
              this.products.totalPondarateMargin) *
            (prod.participacion / 100) *
            prod.salePrice,
          participation: prod.participacion,
          bMPercent: prod.bruteMarginPerc,
          bMargen: prod.bruteMargin,
          cost: prod.cost,
        };
      }); //gets the list of equillibrium by units

    const Budget = (num) => {
      return {
        budProductionCapital: this.products.totalSalesCost,

        budFixedExpenses: this.expenses.monthlyExpense * num,

        budPayroll: this.payroll.monthlyPayroll * num,

        budAssets: this.assets.assetsTotalAmount,

        budContingency:
          (this.products.totalSalesCost +
            this.expenses.monthlyExpense * num +
            this.payroll.monthlyPayroll * num +
            this.assets.assetsTotalAmount) *
          this.contingencyPercent,

        totalBudget:
          this.products.totalSalesCost +
          this.expenses.monthlyExpense * num +
          this.payroll.monthlyPayroll * num +
          this.assets.assetsTotalAmount +
          (this.products.totalSalesCost * num +
            this.expenses.monthlyExpense * num +
            this.payroll.monthlyPayroll * num +
            this.assets.assetsTotalAmount * num) *
            this.contingencyPercent,
      };
    };

    this.monthlyFlow = {
      sales: this.products.totalSales,
      fixedExpenses: this.payroll.monthlyPayroll + this.expenses.monthlyExpense,
      salesCost: this.products.totalSalesCost,
      totalTax: this.products.totalTax,
      netIncome:
        this.products.totalSales -
        (this.payroll.monthlyPayroll + this.expenses.monthlyExpense) -
        this.products.totalSalesCost -
        this.products.totalTax,
    };

    this.yearlyFlow = {
      sales: this.products.totalSales * 12,
      fixedExpenses:
        (this.payroll.monthlyPayroll + this.expenses.monthlyExpense) * 12,
      salesCost: this.products.totalSalesCost * 12,
      totalTax: this.products.totalTax * 12,
      netIncome:
        (this.products.totalSales -
          (this.payroll.monthlyPayroll + this.expenses.monthlyExpense) -
          this.products.totalSalesCost -
          this.products.totalTax) *
        12,
    };

    this.equilibrium = {
      unitEquilibrium: EquilibriumByUnits(), //equilibrium metric for every product
      EquilibriumInUnits: EquilibriumByUnits().reduce((a, b) => a + b.Equ, 0), // minimo de productos a vender al mes
      eqAmount: EquilibriumByUnits().reduce((a, b) => a + b.eqAmount, 0), // minimo de dinero a vender al mes
      yearlyEqAmount:
        EquilibriumByUnits().reduce((a, b) => a + b.eqAmount, 0) * 12, //minimo de dinero a vender al año
    };

    //Posible Budgets(minimum, Mid, Maximum,)
    this.threeMonthBudget = Budget(3);
    this.sixMonthBudget = Budget(6);
    this.oneYearBudget = Budget(12);

    //Metricas de inversion -  ROI

    this.roi = (() => {
      //CALCULATES num of years in which you should spect ROI
      let spectedReturnTimeY = 0;
      let moneyFlow = this.yearlyFlow.netIncome;
      let investment = Budget(3);
      let negativeInvestment = investment.totalBudget * -1;
      let lastRemainer = 0;
      let lastFlow = 0;
      if (moneyFlow <= 0) {
        return {
          roiTime: "This project is not rentable",
          minInitialInvestment: "Do not invest",
        };
      } else {
        while (negativeInvestment < 0) {
          lastRemainer = negativeInvestment;
          lastFlow = moneyFlow;
          negativeInvestment += moneyFlow;
          if (negativeInvestment < 0) {
            moneyFlow = moneyFlow * 1.05;
            spectedReturnTimeY++;
          }
        }
        let lastMonths = Math.floor(((lastRemainer * -1) / lastFlow) * 12);
        return {
          roiTime: `${spectedReturnTimeY} years and ${lastMonths} months`,
          minInitialInvestment: investment.totalBudget,
        };
      }
    })();

    //TIR VPN?
  }

  set projName(name) {
    this.projectName = name;
  }

  set indust(ind) {
    this.industry = ind;
  }

  set cPercent(perc) {
    this.contingencyPercent = perc;
  }

  static createProject(name, ind, prod, emp, gast, act) {
    let prods = new Products(...prod);
    let emps = new Payroll(...emp);
    let gasts = new Expenses(...gast);
    let acts = new Assets(...act);
    let newProj = new Project(name, ind, prods, emps, gasts, acts);
    return newProj;
  }
}
