import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { listServices } from './list.service';
import { task } from './task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  constructor(private listServ: listServices) {}
  id: number = 0;
  tasksNumber;
  allTasks: task[];
  ngOnInit(): void {
    this.tasksNumber = this.listServ.allTasks.length;
    this.allTasks = this.listServ.allTasks;
  }
  onSubmit(f: NgForm) {
    this.listServ.AddTask = {
      id: this.id,
      text: f.value.task,
      isCompleted: false,
    };
    this.id += 1;
    this.tasksNumber = this.listServ.allTasks.length;
    this.allTasks = this.listServ.allTasks;
    console.log(this.tasksNumber);
  }
}
