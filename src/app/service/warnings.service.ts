import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warning } from '../model/Warning';

const baseUrl = 'http://localhost:8080/warnings';


@Injectable({
  providedIn: 'root',
})
export class WarningsService {
  constructor(private http: HttpClient) {}

  /*CREATE*/
  postWarning(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }


  /*READ*/
  getAllWarnings(params:any): Observable<any> {
    return this.http.get<any>(
     `${baseUrl}/warnings`
    , { params });
  }
  getWarningById(id: any): Observable<Warning> {
    return this.http.get<Warning>(
      `${baseUrl}/${id}`
    );
  }
  getByTitleWarning(title: string): Observable<Warning[]> {
    return this.http.get<Warning[]>(
      `https://receitasdomarquito.herokuapp.com/warnings/title${title}`
    );
  }

  findByTitle(title: any): Observable<Warning[]> {
    return this.http.get<Warning[]>(`${baseUrl}?title=${title}`);
  }



  /*UPDATE*/
  putWarning(id:any, data:any): Observable<any> {
    return this.http.put(
      `${baseUrl}/${id}`,
      data
    );
  }


  
  /*DELETE*/
  deleteWarning(id: any) {
    return this.http.delete(
      `${baseUrl}/${id}`
    );
  }
 
    deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  
}
