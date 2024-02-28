import { Injectable, computed, signal } from '@angular/core';
import { task } from './task.interface';

@Injectable({ providedIn: 'root' })
export class listServices {
  private tasks = signal<task[]>([]);
  private completedTasks = signal<task[]>([]);
  private activeTasks = signal<task[]>(this.tasks());
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
    this.tasks.update(tasks=>tasks.filter(t=> t.id !== id));
    this.completedTasks.update(comp=>comp.filter(t=> t.id !== id));
    this.activeTasks.update(comp=>comp.filter(t=> t.id !== id));
  }


  // task completed 
  addToCompleted(id:number){
    this.tasks()[id].isCompleted = true;
    this.completedTasks.update(()=>this.tasks().filter(t=>t.isCompleted));
  }

  // add to completed tasks 
  completedTask(){
    return this.completedTasks;
  }

  // active task 
  activeTask(){
    this.activeTasks.update(()=> this.tasks().filter(t=>!t.isCompleted));
    return this.activeTasks;
  }

  // clear completed 
  clearCompleted(){
    this.completedTasks.set([]);
    this.tasks.update(()=> this.tasks().filter(t=>!t.isCompleted));
  }
}
