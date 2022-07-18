import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  loanAmount: number = 0;
  tenure: number = 0;
  interest: number = 0;
  emi: number = 0;
  cal() {
    var outstandingAmount =
      Number(this.loanAmount) +
      Number(this.loanAmount * (this.interest / 100) * this.tenure);
    this.emi = outstandingAmount / this.tenure;
  }

  constructor() { }

  ngOnInit(): void {
    
    
  }

  
}
