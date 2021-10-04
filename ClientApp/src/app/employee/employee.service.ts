import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from './employee';
import { MessageService } from '../message.service';

const baseUrl = 'https://localhost:44319/api/Employees';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { } 

  /** GET employees */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl)
      .pipe(
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  /** GET: get employee details, by id */
  getEmployee(id: number): Observable<Employee> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`fetched employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  /** PUT: update the department */
  updateEmployee(employee: Employee): Observable<any> {
    const url = `${baseUrl}/${employee.id}`;
    return this.http.put(url, employee, this.httpOptions).pipe(
      tap(_ => this.log(`updated employee id=1`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }


  /** DELETE: delete the employee */
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a EmployeeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }
}
