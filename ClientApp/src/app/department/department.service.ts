import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Department } from './department';
import { MessageService } from '../message.service';

const baseUrl = 'https://localhost:44319/api/Departments';

@Injectable({ providedIn: 'root' })
export class DepartmentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET departments */
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(baseUrl)
      .pipe(
        tap(_ => this.log('fetched departments')),
        catchError(this.handleError<Department[]>('getDepartments', []))
      );
  }

  /** GET: get department details, by id */
  getDepartment(id: number): Observable<Department> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Department>(url).pipe(
      tap(_ => this.log(`fetched department id=${id}`)),
      catchError(this.handleError<Department>(`getDepartment id=${id}`))
    );
  }
 

  /** PUT: update the department */
  updateDepartment(department: Department): Observable<any> {
    const url = `${baseUrl}/${department.id}`;
    return this.http.put(url, department, this.httpOptions).pipe(
      tap(_ => this.log(`updated department id=1`)),
      catchError(this.handleError<any>('updateDepartment'))
    );
  }

  /** POST: add a new department */
  //addDepartment(department: Department): Observable<Department> {
  //  return this.http.post<Department>(baseUrl, department, this.httpOptions).pipe(
  //    tap((newDepartment: Department) => this.log(`added department w/ id=${newDepartment.id}`)),
  //    catchError(this.handleError<Department>('addDepartment'))
  //  );
  //}

  /** DELETE: delete the department */
  deleteDepartment(id: number): Observable<Department> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<Department>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted department id=${id}`)),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }

  /* GET departments whose name contains search term */
  searchDepartments(term: string): Observable<Department[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Department[]>(`${baseUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found departments matching "${term}"`) :
        this.log(`no departments matching "${term}"`)),
      catchError(this.handleError<Department[]>('searchSepartments', []))
    );
  }

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
    this.messageService.add(`DepartmentService: ${message}`);
  }
}



