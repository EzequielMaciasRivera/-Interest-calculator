import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InvesmentData } from 'src/app/models/investmentData.model';
import { CalculatorServiceService } from 'src/app/services/calculator.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
 /*  invesmentForm = new FormGroup({
    initialBalance: new FormControl(0),
    annualContribution: new FormControl(0),
    annualIcrease: new FormControl(0),
    investmentYears: new FormControl(0),
    performance: new FormControl(0),
  }); */

  model: InvesmentData = {
    initialBalance: 0,
    annualContribution: 0,
    annualIcrease: 0,
    investmentYears: 0,
    performance: 0
  }
    constructor(private calculatorServiceService: CalculatorServiceService){}

  onSubmit() {
    console.log(this.model);
    this.calculatorServiceService.requestCalculus(this.model).subscribe((response: InvesmentData) => console.log(response));
   /* this.calculatorServiceService.requestCalculus(this.model); */
    /*  if (this.formularioContacto.valid)
      this.resultado = 'Todos los datos son válidos';
    else this.resultado = 'Hay datos inválidos en el formulario'; */
  }
}
