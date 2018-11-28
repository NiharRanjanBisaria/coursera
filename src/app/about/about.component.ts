import { Component, OnInit } from '@angular/core';
import {LeaderService} from '../services/leader.service';
import {leader} from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leader : leader[];

  constructor(private leaderservice :LeaderService) { }

  ngOnInit() {
    this.leader= this.leaderservice.getLeader();
  }

  


}
