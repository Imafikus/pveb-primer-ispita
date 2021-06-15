import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGoal } from './interfaces';

@Injectable({
  providedIn: 'root'
})



export class BackendService {
  constructor(private http: HttpClient) { }

  getAllGoals() {
    return this.http.get<IGoal[]>('http://localhost:3000/goals');
  }
  postAllGoals(payload: any) {
    return this.http.post('http://localhost:3000/goals', payload);
  }
}
