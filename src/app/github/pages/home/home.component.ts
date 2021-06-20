import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GithubService } from '../../github.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cols: any[] = [
    { header: 'Author' },
    { header: 'Commit' },
    { header: 'Date' },
  ];

  public branches: any[] = [];
  public commits: any[] = [];
  public diff: any[] = [];
  public user: string = "Julius-cell";
  public repository: string = "Take-home-App";
  public sha!: string;

  public repoForm!: FormGroup;

  constructor(private githubService: GithubService, 
              private fb: FormBuilder) {
    this.repoForm = fb.group({
      user: ['', [Validators.required]],
      repository: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.githubService.get_branches(this.user, this.repository).subscribe(res => {
      this.branches = res;
    })
  }

  changeBranch(e: any) {
    this.githubService.get_commits(this.user, this.repository, e.commit.sha).subscribe(res => {
      this.commits = res;
    })
  }

}