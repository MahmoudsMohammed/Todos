import { Injectable, signal } from '@angular/core';
import { task } from './task.interface';

@Injectable({ providedIn: 'root' })
export class listServices {
  tasks = signal<task[]>([]);
  id = 0;
  get allTasks() {
    return this.tasks;
  }
  set AddTask(text: string) {
    this.tasks.update((all) => [
      ...all,
      { id: this.id, text: text, isCompleted: false },
    ]);
    this.id += 1;
  }
  removeTask(id:number){
    this.allTasks.update(tasks=>tasks.filter(t=> t.id !== id));
  }
}
