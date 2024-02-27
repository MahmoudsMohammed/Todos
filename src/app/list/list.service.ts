import { Injectable, signal } from '@angular/core';
import { task } from './task.interface';

@Injectable({ providedIn: 'root' })
export class listServices {
  private tasks = signal<task[]>([]);
  get allTasks() {
    return this.tasks();
  }
  set AddTask(t: task) {
    this.tasks.update(() => [...this.tasks(), t]);
  }
}
