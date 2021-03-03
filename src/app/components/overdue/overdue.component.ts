import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.scss']
})
export class OverdueComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getOverdueTasks()
  }

  tasks = [];


  getOverdueTasks = () => {
    this.api.getOverdueTasks("1", false).subscribe(res => {
      console.log("OverdueComponent -> getOverdueTasks -> res", res)
      this.tasks = res;
    })
  }

}
