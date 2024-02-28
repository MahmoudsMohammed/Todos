import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { listServices } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  constructor(private listServ: listServices) {}
  tasks;
  all = true;
  active = false;
  completed = false;

  ngOnInit(): void {
    this.tasks = this.listServ.allTasks;
  }
  onSubmit(f: NgForm) {
    if (f.value.task) {
      this.listServ.AddTask = f.value.task;
      f.reset();
    }
  }

  getAll(){
    this.tasks = this.listServ.allTasks;
    this.all = true;
    this.active = false;
    this.completed = false;
  }

  getActive(){
    this.tasks = this.listServ.activeTask();
    this.all = false;
    this.active = true;
    this.completed = false;
  }

  getCompleted(){
    this.tasks = this.listServ.completedTask();
    this.all = false;
    this.active = false;
    this.completed = true;
  }

  onClear(){
    this.listServ.clearCompleted();
  }
}
