import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../github.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cols: any[] = [
    { header: 'Author' },
    { header: 'Commit' }
  ];

  public branches: any[] = [];
  public commits: any[] = [];
  public user: string = "Julius-cell";
  public repository: string = "Take-home-App";
  public sha!: string;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.get_branches(this.user, this.repository).subscribe(res => {
      this.branches = res;
    })
    // this.githubService.get_readme(this.user, this.repository).subscribe(res => {
    //   console.log(res);
    // })
  }
  
  changeBranch(e: any) {
    this.githubService.get_commits(this.user, this.repository, e.commit.sha).subscribe(res => {
      console.log('Commits');
      console.log(res);
      this.commits = res;
    })
  }

}