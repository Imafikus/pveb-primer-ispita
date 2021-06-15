import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-app-goal',
  templateUrl: './app-goal.component.html',
  styleUrls: ['./app-goal.component.css']
})
export class AppGoalComponent implements OnInit {

  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
  }

  sendGoalForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    importance: new FormControl('', [
      Validators.required
    ]),
    step1: new FormControl(''),
    step2: new FormControl(''),
    step3: new FormControl(''),
  });



  onSubmit() {
    const payload = {
      naziv: this.sendGoalForm.value.name,
      opis: this.sendGoalForm.value.description,
      vaznost: Number(this.sendGoalForm.value.importance),
      steps: [
        this.sendGoalForm.value.step1,
        this.sendGoalForm.value.step2,
        this.sendGoalForm.value.step3,
      ]
    }
    this.backendService
      .postAllGoals(payload)
      .subscribe(data => console.log('Server response: ', data));
  }
}
