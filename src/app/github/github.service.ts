import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // Add your Github credentials here:
  public username: string = '';
  public password: string = '';

  public baseUrl: string = 'https://api.github.com';
  public headers = new HttpHeaders({
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `Basic ${btoa(`${this.username}:${this.password}`)}`
  });

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) { }


  get_branches(user: string, repo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos/${user}/${repo}/branches`,
      { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.errorHandler.handleError)
      );
  }

  get_commits(user: string, repo: string, sha: string): Observable<any> {
    const query = `?per_page=100&sha=${sha}`;
    return this.http.get(`${this.baseUrl}/repos/${user}/${repo}/commits${query}`,
      { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.errorHandler.handleError)
      );
  }

}
