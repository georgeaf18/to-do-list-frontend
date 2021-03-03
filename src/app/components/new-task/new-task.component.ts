import { Component, OnInit, Output, EventEmitter, Pipe } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgbDateStruct, NgbCalendar, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private api: ApiService, private calendar: NgbCalendar) { }

  ngOnInit() {
    this.formatDate()
  }

  task: string;
  priority: boolean = false;
  addMode = false;
  @Output() addedTask: EventEmitter<any> = new EventEmitter();
  datePickerDate: NgbDateStruct = this.calendar.getToday();
  displayedDate = "Today"
  minDate = this.calendar.getToday()

  togglePriority = () => {
    this.priority = !this.priority
  }

  formatDate = () => {
    console.log("NewTaskComponent -> formatDate -> this.calendar.getToday()", this.calendar.getToday())
    console.log("NewTaskComponent -> formatDate -> this.datePickerDate", this.datePickerDate)

    if (this.datePickerDate.month === this.calendar.getToday().month && this.datePickerDate.day === this.calendar.getToday().day && this.datePickerDate.year === this.calendar.getToday().year) {
      this.displayedDate = "Today";
    } else if (this.datePickerDate.month === this.calendar.getToday().month && this.datePickerDate.day === this.calendar.getToday().day + 1 && this.datePickerDate.year === this.calendar.getToday().year) {
      this.displayedDate = "Tomorrow";
    } else {
      this.displayedDate = `${this.datePickerDate.month}-${this.datePickerDate.day}-${this.datePickerDate.year}`;
    }
  }

  submit = () => {
    const task = {
      task: this.task,
      priority: this.priority,
      date: `${this.datePickerDate.year}-${this.datePickerDate.month}-${this.datePickerDate.day}`,
      userPK: 1,
      label: "chores"
    }

    this.api.insertTask({ task }).subscribe(res => {
      if (res.status === "success") {
        this.addMode = false;
        this.addedTask.emit();
        this.task = "";
        this.priority = false;
      }
    })
  }
  //93% phone

}
