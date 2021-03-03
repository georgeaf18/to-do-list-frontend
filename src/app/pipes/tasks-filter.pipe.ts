import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform {

  transform(tasks, args: any[]) {
    let sortedTasks = tasks.sort((a, b) => {
      return (a.priority === b.priority) ? 0 : a.priority ? -1 : 1;
    });

    return sortedTasks;
  }

}
