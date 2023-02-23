import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formularioContacto = new FormGroup({
    initialBalance: new FormControl(0),
    annualContribution: new FormControl(0),
    annualIcrease: new FormControl(0),
    investmentYears: new FormControl(0),
    performance: new FormControl(0),
  });

  submit() {
   /*  if (this.formularioContacto.valid)
      this.resultado = 'Todos los datos son válidos';
    else this.resultado = 'Hay datos inválidos en el formulario'; */
  }
}
