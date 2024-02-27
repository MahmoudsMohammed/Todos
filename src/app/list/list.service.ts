import { Injectable, signal } from "@angular/core";
import { task } from "./task.interface";

@Injectable({providedIn:'root'})
export class listServices{
  tasks = signal<task[]>([]);
  
}