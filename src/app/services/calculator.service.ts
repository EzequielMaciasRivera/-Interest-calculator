import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvesmentData } from '../models/investmentData';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  interestRequestData$ = new EventEmitter<boolean>();
  interestRequestDataResponse: any;
  baseURL = 'http://localhost:8080/calculator/interestForm';
  //http://localhost:8080
  
  constructor(private http: HttpClient) { }

  requestCalculus(invesmentDataForm: InvesmentData): Observable<InvesmentData>{
    return this.http.post<InvesmentData>(this.baseURL, invesmentDataForm);
  }
}
