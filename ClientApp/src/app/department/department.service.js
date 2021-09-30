////import { Injectable } from '@angular/core';
////import { HttpClient, HttpHeaders } from '@angular/common/http';
////import { Observable, of } from 'rxjs';
////import { catchError, map, tap } from 'rxjs/operators';
////import { Department } from './department';
////import { MessageService } from '../message.service';
////@Injectable({ providedIn: 'root' })
////export class DepartmentService {
////  private departmentsUrl = 'api/departments';  // URL to web api
////  httpOptions = {
////    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
////  };
////  constructor(
////    private http: HttpClient,
////    private messageService: MessageService  ) { }
////  /** POST: add a new hero to the server */
////  addDepartment(department: Department): Observable<Department> {
////    return this.http.post<Department>(this.departmentsUrl, department, this.httpOptions).pipe(
////      tap((newDepartment: Department) => this.log(`added hero w/ id=${newDepartment.id}`)),
////      catchError(this.handleError<Department>('addDepartment'))
////    );
////  }
/////**
//// * Handle Http operation that failed.
//// * Let the app continue.
//// * @param operation - name of the operation that failed
//// * @param result - optional value to return as the observable result
//// */
////private handleError<T>(operation = 'operation', result ?: T) {
////  return (error: any): Observable<T> => {
////    // TODO: send the error to remote logging infrastructure
////    console.error(error); // log to console instead
////    // TODO: better job of transforming error for user consumption
////    this.log(`${operation} failed: ${error.message}`);
////    // Let the app keep running by returning an empty result.
////    return of(result as T);
////  };
////}
////  /** Log a HeroService message with the MessageService */
////  private log(message: string) {
////    this.messageService.add(`HeroService: ${message}`);
////  }
////}
//# sourceMappingURL=department.service.js.map