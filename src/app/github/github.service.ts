import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  public baseUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }


  get_branches(user: string, repo: string,): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos/${user}/${repo}/branches`);
  }

  get_commits(user: string, repo: string, branch: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos/${user}/${repo}/branches/${branch}`);
  }

}
