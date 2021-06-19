import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../github.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {}

  

}
