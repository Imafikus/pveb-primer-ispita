import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendService } from '../backend.service';
import { IGoal } from '../interfaces';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  allGoals: IGoal[] = [];
  filteredGoals: IGoal[] = [];

  homeForm = new FormGroup({
    importance: new FormControl('')
  });


  constructor(
    private backendService: BackendService
  ) { }

  onImportanceChange(e) {
    const importance = e.target.value;
    this.filteredGoals = this.allGoals.filter(goal => goal.vaznost == importance);

  }

  ngOnInit(): void {
    this.backendService.getAllGoals().subscribe(data => {
      this.allGoals=data;
      this.filteredGoals = data;
      console.log(this.allGoals);
    });
  }

}
