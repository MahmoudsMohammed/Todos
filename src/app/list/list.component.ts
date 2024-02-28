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
  }

  getActive(){
    this.tasks = this.listServ.activeTask();
  }

  getCompleted(){
    this.tasks = this.listServ.completedTask();
  }

  onClear(){
    this.listServ.clearCompleted();
  }
}
