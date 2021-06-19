import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CoreService } from '../core.service';
import { User } from '../models/user.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public $userData!: Observable<User>;

  constructor(private coreService: CoreService) {}
  
  ngOnInit(): void {
    this.$userData = this.coreService.get_user('Julius-cell');
  }

}
