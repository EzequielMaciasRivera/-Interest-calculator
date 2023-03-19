import { CalculatorServiceService } from 'src/app/services/calculator.service';
import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { InvesmentData } from 'src/app/models/investmentData';
import { MatPaginator } from '@angular/material/paginator';
import { InvestmentResults } from '../models/investmentResults';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnDestroy {
  resultsLength = 0;
  interestRequestData: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showPicture = true;
  displayedColumns: string[] = ['investmentYears', 'initialBalance', 'annualContribution', 'performance', 'annualIcrease'];
  dataSource: MatTableDataSource<InvestmentResults>;
  ELEMENT_DATA: InvestmentResults[] = [
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 2, initialBalance: 1000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
    { investmentYears: 1, initialBalance: 5000, annualContribution: 12000, performance: 1800, annualIcrease: 30 },
  ];
  constructor(private calculatorServiceService: CalculatorServiceService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    this.interestRequestData = this.calculatorServiceService.interestRequestData$.subscribe(() => {
      this.ELEMENT_DATA = this.calculatorServiceService.interestRequestDataResponse;
      this.showPicture = false;
    });
  }
  /* ngOnInit(): void {
    this.dataSource = new MatTableDataSource<InvesmentData>(this.ELEMENT_DATA);
    this.dataSource = this.ELEMENT_DATA;
  } */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy(): void {
    this.interestRequestData.unsubscribe();
  }
}