import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGoalComponent } from './app-goal/app-goal.component';
import { AppHomeComponent } from './app-home/app-home.component';


const routes: Routes = [
  { path: 'add-goal', component: AppGoalComponent },
  { path: '', component: AppHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
