import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InvesmentData } from 'src/app/models/investmentData';
import { CalculatorServiceService } from 'src/app/services/calculator.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  ////////
  defaultValue: any;
  // result!: string;

  interestCalculatorForm = new FormGroup({
    initialBalance: new FormControl(1000, [Validators.required,Validators.min(1000)]),
    annualContribution: new FormControl(0),
    annualIncrease: new FormControl(0),
    investmentYears: new FormControl(1, [Validators.required, Validators.min(1)
    ]),
    performance: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  constructor(private calculatorServiceService: CalculatorServiceService) {}

  defaultValuesValidator(): void {
    if (this.interestCalculatorForm.value.annualContribution === null) {
      this.interestCalculatorForm.controls['annualContribution'].setValue(0);
    }
    if (this.interestCalculatorForm.value.annualIncrease === null) {
      this.interestCalculatorForm.controls['annualIncrease'].setValue(0);
    }
  }

  onSubmit(): void {
    this.defaultValuesValidator();


    this.calculatorServiceService.interestRequestData$.next(false);
    console.log(this.interestCalculatorForm);
    /*  this.calculatorServiceService
      .requestCalculus(formGroupValue)
      .subscribe((response: InvesmentData) => console.log(response)); */
    /* this.calculatorServiceService.requestCalculus(this.model); */

   /*  if (this.interestCalculatorForm.valid)
      this.result = 'Todos los datos son válidos';
    else this.result = 'Hay datos inválidos en el formulario'; */
  }
}
