import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Department } from './department';
import { MessageService } from '../message.service';

const baseUrl = 'https://localhost:44319';

@Injectable({ providedIn: 'root' })
export class DepartmentService {

  private departmentsUrl = 'https://localhost:44319/departments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  deleteDepartment(id: number): Observable<Department> {
    const url = `${baseUrl+'/departments'}/${id}`;

    return this.http.delete<Department>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted department id=${id}`)),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }

  getDepartment(id: number): Observable<Department> {
    const url = `${this.departmentsUrl}/${id}`;
    return this.http.get<Department>(url).pipe(
      tap(_ => this.log(`fetched department id=${id}`)),
      catchError(this.handleError<Department>(`getDepartment id=${id}`))
    );
  }

  //get(id): Observable<any> {
  //  return this.http.get(`${baseUrl + '/departments'}/${id}`);
  //}

  //update(id, data): Observable<any> {
  //  return this.http.put(`${baseUrl + '/departments'}/${id}`, data);
  //}

  //delete(id): Observable<any> {
  //  return this.http.delete(`${baseUrl + '/departments'}/${id}`);
  //}

  /** GET by id */
  //getDepartmentById(departmentId: string): Observable<Department> {
  //  return this.http.get<Department>(this.departmentsUrl + departmentId);
  //}
 

  /** POST: add a new department to the server */
  //addDepartment(department: Department): Observable<Department> {
  //  return this.http.post<Department>(this.departmentsUrl, department, this.httpOptions).pipe(
  //    tap((newDepartment: Department) => this.log(`added department w/ id=${newDepartment.id}`)),
  //    catchError(this.handleError<Department>('addDepartment'))
  //  );
  //}


/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result ?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}



