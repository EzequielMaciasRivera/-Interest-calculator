import { CalculatorServiceService } from 'src/app/services/calculator.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { InvesmentData } from 'src/app/models/investmentData.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  resultsLength = 0;
  interestRequestData: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  data: any;
  showPicture = true;
  displayedColumns: string[] = ['investmentYears', 'initialBalance', 'annualContribution', 'performance', 'annualIcrease'];
  dataSource: any;
  ELEMENT_DATA: InvesmentData[] = [
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 2, initialBalance: 1000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
    {investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30},
  ];
  constructor(private calculatorServiceService: CalculatorServiceService) {
    
    this.interestRequestData =
      this.calculatorServiceService.interestRequestData$.subscribe(() => {
        this.data = this.calculatorServiceService.interestRequestDataResponse;
        this.ELEMENT_DATA = this.data;
        this.showPicture = false;
      });
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<InvesmentData>(this.ELEMENT_DATA);
    this.dataSource = this.ELEMENT_DATA;
  }
  ngOnDestroy(): void {
    this.interestRequestData.unsubscribe();
  }
}