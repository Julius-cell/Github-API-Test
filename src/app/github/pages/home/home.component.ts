import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GithubService } from '../../github.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
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
  public first: number = 0;

  public repoForm!: FormGroup;

  constructor(private githubService: GithubService,
              private fb: FormBuilder,
              private messageService: MessageService) {
    this.repoForm = fb.group({
      user: ['', [Validators.required]],
      repository: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.githubService.get_branches(this.user, this.repository).subscribe(res => {
      this.branches = res;
    }, (err) => {
      this.messageService.add({
        severity:'error', summary: `${err.name}`, detail: `${err.message}`
      });
    })
  }

  changeBranch(e: any) {
    this.commits = [];
    this.reset();
    this.githubService.get_commits(this.user, this.repository, e.commit.sha).subscribe(res => {
      this.commits = res;
    }, (err) => {
      this.messageService.add({
        severity:'error', summary: `${err.name}`, detail: `${err.message}`
      });
    })
  }

  searchRepo() {
    const formData = this.repoForm.value;
    this.user = formData.user;
    this.repository = formData.repository;
    this.githubService.get_branches(formData.user, formData.repository).subscribe(res => {
      this.branches = res;
      this.repoForm.reset();
      this.commits = [];
    }, (err) => {
      this.messageService.add({
        severity:'error', summary: `${err.name}`, detail: `${err.message}`
      });
    }
    )
  }

  reset() {
    this.first = 0;
  }

}