import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  public baseUrl: string = 'https://api.github.com';
  public headers = new HttpHeaders({
    'Accept': 'application/vnd.github.v3+json'
  });

  constructor(private http: HttpClient) { }


  get_branches(user: string, repo: string,): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos/${user}/${repo}/branches`,
      { headers: this.headers });
  }

  get_commits(user: string, repo: string, sha: string): Observable<any> {
    const query = `?per_page=100&sha=${sha}`;
    return this.http.get(`${this.baseUrl}/repos/${user}/${repo}/commits${query}`,
      { headers: this.headers });
  }

}
