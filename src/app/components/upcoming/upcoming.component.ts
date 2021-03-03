import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getTasks();
  }

  tasksInTimeSlot = [];

  getTasks = () => {
    this.api.getUpcomingTasks("1", false).subscribe(res => {
      console.log("UpcomingComponent -> getTasks -> res", res)
      this.tasksInTimeSlot = res;
    })
  }
}
