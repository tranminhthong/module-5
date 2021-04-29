import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  fistNumber: number;
  secondNumber: number;
  output: number;
  operator: any;

  constructor() {
  }

  ngOnInit() {
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.fistNumber + this.secondNumber;
        break;
      case '-':
        this.output = this.fistNumber - this.secondNumber;
        break;
      case '*':
        this.output = this.fistNumber * this.secondNumber;
        break;
      case '/':
        this.output = this.fistNumber / this.secondNumber;
        break;
    }
  }
}
