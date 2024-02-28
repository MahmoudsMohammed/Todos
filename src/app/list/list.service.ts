import { Injectable, computed, signal } from '@angular/core';
import { task } from './task.interface';

@Injectable({ providedIn: 'root' })
export class listServices {
  private tasks = signal<task[]>([]);
  private completedTasks = signal<task[]>([]);
  private activeTasks = this.tasks;
  id = 0;

  // all tasks
  get allTasks() {
    return this.tasks;
  }

  // add new task
  set AddTask(text: string) {
    this.tasks.update((all) => [
      ...all,
      { id: this.id, text: text, isCompleted: false },
    ]);
    this.id += 1;
  }

  // remove task
  removeTask(id:number){
    this.allTasks.update(tasks=>tasks.filter(t=> t.id !== id));
  }


  // task completed 
  addToCompleted(id:number){
     // get completed tasks from all tasks
     let x = this.tasks().filter(t=>t.id === id);
     this.completedTasks.set(x);
     // get Active tasks from all tasks
     x = this.tasks().filter(t=>t.id !== id);
     this.activeTasks.set(x);
  }

  // add to completed tasks 
  completedTask(){
    return this.completedTasks;
  }

  // active task 
  activeTask(){
    return this.activeTasks;
  }
}
