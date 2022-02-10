import { Component, OnInit } from '@angular/core';
import { TodoList, todoList } from '../../todoList';

@Component({
  selector: 'app-route-todo',
  templateUrl: './route-todo.component.html',
  styleUrls: ['./route-todo.component.scss'],
})
export class RouteTodoComponent implements OnInit {
  todoList: TodoList[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.todoList = todoList;
    console.log(this.todoList);
  }
}
