import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteTodoComponent } from './route-todo.component';
import { FormsModule } from '@angular/forms';
// import { RouteTodoComponent } from './route-todo.component';

@NgModule({
  declarations: [RouteTodoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // RouteTodoNavComponent
  ],
  exports: [RouteTodoComponent],
})
export class RouteTodoModule {}
