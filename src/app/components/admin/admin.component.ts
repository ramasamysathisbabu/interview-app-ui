import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../../services/interview.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public candidateResponse;

  constructor(private interviewService:InterviewService) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.interviewService.getCandidates().subscribe(
      data => {this.candidateResponse = data},
      err => console.error(err),
      () => console.log('candidates loaded')
    );
  }


}
