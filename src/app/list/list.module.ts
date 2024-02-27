import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { TaskComponent } from './task/task.component';
import { checkDirective } from './task/directives/checked.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent, TaskComponent, checkDirective],
  exports: [ListComponent],
  imports: [CommonModule],
})
export class listModule {}
