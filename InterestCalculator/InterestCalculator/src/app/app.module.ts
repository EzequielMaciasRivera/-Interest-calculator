import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { Material } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './summaryTable/table.component';
import { CalculatorGraphComponent } from './calculator-graph/calculator-graph.component';
import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';

import { FormComponent } from './calculatorForm/form.component';

import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    FormComponent,
    TableComponent,
    FooterComponent,
    CalculatorGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InfoComponent]
})
export class AppModule {}
