import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../github.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public branches: string[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.get_branches('Julius-cell', 'Take-home-App').subscribe(res => {
      console.log('Branches');
      this.branches = res;
      console.log(this.branches);
    })
    this.githubService.get_commits('Julius-cell', 'Take-home-App', 'develop').subscribe(res => {
      console.log('Commits');
      console.log(res);
    })
  }



}