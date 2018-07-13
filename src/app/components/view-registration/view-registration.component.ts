import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../../services/interview.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public candidateReg;

  constructor(private interviewService:InterviewService, private route:ActivatedRoute) { 

  }

  ngOnInit() {
    this.getCandidateReg(this.route.snapshot.params.id);
  }

  getCandidateReg(id:number){
    this.interviewService.getCandidate(id).subscribe(
      data => {
        this.candidateReg = data;
      },
      err => console.error(err),
      () => console.log('candidate loaded')
    );
  }

}
