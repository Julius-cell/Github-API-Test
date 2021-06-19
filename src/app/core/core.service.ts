import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public baseUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  get_user(user: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/users?q=${user}`)
    .pipe(map((res: any) => res.items[0]));
  }
  
}
