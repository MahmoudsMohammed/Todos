import { Component, Input } from '@angular/core';
import { listServices } from '../list.service';
import { task } from '../task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor(private listServ:listServices){};
  @Input({ required: true }) content: task;
  @Input({ required: true }) index: number;
  remove = false;
  onRemove() {
    this.listServ.removeTask(this.content.id);
    this.remove = true;
  }

  addToCompleted(){
    this.listServ.addToCompleted(this.index);
  }
}
