import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.priority = this.task.priority;
  }

  @Input() task = null;
  edit = false;
  @Output() updatedTask: EventEmitter<any> = new EventEmitter();
  priority = false;

  toggleEdit = () => {
    this.edit = !this.edit;
  }

  delete = () => {
    this.api.deleteTask(this.task.pk).subscribe(res => {
      if (res.status === "success") {
        this.updatedTask.emit();
      }
    })
  }

  updateTask = () => {
    this.api.updateTask(this.task.pk, this.task).subscribe(res => {
      if (res.status === "success") {
        this.edit = false;
        this.updatedTask.emit();
      }
    })
  }
}
