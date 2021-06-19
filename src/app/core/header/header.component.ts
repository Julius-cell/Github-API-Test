import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.get_user('Julius-cell').subscribe(res => {
      console.log(res);
    })
  }

}
