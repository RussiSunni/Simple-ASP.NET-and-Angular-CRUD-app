import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeCreateEdit',
  templateUrl: './employeeCreateEdit.component.html',
})
export class EmployeeCreateEditComponent {

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Department>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }
  
}
