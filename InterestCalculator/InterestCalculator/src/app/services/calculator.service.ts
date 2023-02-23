import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvesmentData } from '../models/investmentData.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  baseURL = 'localhost:8080';
  constructor(private http: HttpClient) { }

  requestCalculus(invesmentDataForm: InvesmentData): Observable<InvesmentData>{
    return this.http.post<InvesmentData>(this.baseURL, invesmentDataForm);
  }
}
