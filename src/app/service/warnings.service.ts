import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warning } from '../model/Warning';

@Injectable({
  providedIn: 'root',
})
export class WarningsService {
  constructor(private http: HttpClient) {}

  /*CREATE*/
  postWarning(Warning: Warning): Observable<Warning> {
    return this.http.post<Warning>(
      'https://receitasdomarquito.herokuapp.com/warnings',
      Warning
    );
  }


  /*READ*/
  getAllWarnings(): Observable<Warning[]> {
    return this.http.get<Warning[]>(
      'https://receitasdomarquito.herokuapp.com/warnings/all'
    );
  }
  getByWarningById(id: number): Observable<Warning> {
    return this.http.get<Warning>(
      `https://receitasdomarquito.herokuapp.com/warnings/${id}`
    );
  }
  getByTitleWarning(title: string): Observable<Warning[]> {
    return this.http.get<Warning[]>(
      `https://receitasdomarquito.herokuapp.com/warnings/title${title}`
    );
  }



  /*UPDATE*/
  putWarning(Warning: Warning): Observable<Warning> {
    return this.http.put<Warning>(
      'https://receitasdomarquito.herokuapp.com/warnings',
      Warning
    );
  }


  
  /*DELETE*/
  deleteWarning(id: number) {
    return this.http.delete(
      `https://receitasdomarquito.herokuapp.com/warnings/${id}`
    );
  }
}
