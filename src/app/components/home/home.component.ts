import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../../services/interview.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Observable } from '../../../../node_modules/rxjs';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidateForm: FormGroup;
  validMessage: String = "";

  constructor(private interviewService:InterviewService) { }

  ngOnInit() {
    this.candidateForm = new FormGroup({
      prefix : new FormControl('', Validators.required),
      firstName : new FormControl('', Validators.required),
      middleName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      phoneNumber : new FormControl('', Validators.required)
    })
  }

  submitRegistration(){

    if(this.candidateForm.valid){
      this.validMessage = "Candidate Registration Successful";
      this.interviewService.createCandidateRegistration(this.candidateForm.value).subscribe(
        data => {
          this.candidateForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form completely";
    }

  }

}
