import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.log(error);
      console.error(
        `Backend returned code ${error.status}, body was: `,
        {
          name: error.name,
          body: error.error,
          type: error.message
        });
    }
    return throwError({
      name: 'Error',
      message: 'Something bad happened; please try again later.'
    });
  }

  constructor() { }
}
