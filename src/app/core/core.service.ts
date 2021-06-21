import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { ErrorHandlerService } from '../github/error-handler.service';
import { GithubService } from '../github/github.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public baseUrl: string = 'https://api.github.com';
  public headers = new HttpHeaders({
    'Accept': 'application/vnd.github.v3+json',
  });

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService,
              private githubService: GithubService) { }

  get_user(user: string): Observable<any> {
    let username = user;
    if (this.githubService.username) {
      username = this.githubService.username
    }    
    return this.http.get(`${this.baseUrl}/search/users?q=${username}`,
    { headers: this.headers })
    .pipe(
      map((res: any) => res.items[0]),
      catchError(this.errorHandler.handleError)
    );
  }
  
}
