import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InvesmentData } from 'src/app/models/investmentData.model';
import { CalculatorServiceService } from 'src/app/services/calculator.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit{
  formGroup: FormGroup;
  /* model: InvesmentData = {
    initialBalance: 0,
    annualContribution: 0,
    annualIcrease: 0,
    investmentYears: 0,
    performance: 0
  } */
  constructor(
    private calculatorServiceService: CalculatorServiceService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      initialBalance: [, Validators.required],
      annualContribution: [, Validators.required],
      annualIcrease: [, Validators.required],
      investmentYears: [, Validators.required],
      performance: [, Validators.required],
    });
  }
  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe();
  }
  onSubmit(formGroupValue: InvesmentData) {
    this.calculatorServiceService.interestRequestData$.next(false);
    console.log(formGroupValue);
    this.calculatorServiceService
      .requestCalculus(formGroupValue)
      .subscribe((response: InvesmentData) => console.log(response));
    /* this.calculatorServiceService.requestCalculus(this.model); */
    /*  if (this.formularioContacto.valid)
      this.resultado = 'Todos los datos son válidos';
    else this.resultado = 'Hay datos inválidos en el formulario'; */
  }
}
