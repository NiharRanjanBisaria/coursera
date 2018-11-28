import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {leader} from '../shared/leader'

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

getLeader() {
  return LEADERS;
}

  getFeaturedLeader() {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}

