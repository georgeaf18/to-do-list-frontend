import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getTodaysTask();
  }

  todaysDate = new Date();
  tasks = [];

  getTodaysTask = () => {
    // Has to be changed to get only the days tasks
    if (this.tasks.length <= 0) {
      this.api.getTodaysTasks("1").subscribe(res => {
        this.tasks = res;
      })
    }
  }

}
