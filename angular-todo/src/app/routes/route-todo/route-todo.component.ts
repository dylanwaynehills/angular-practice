import { Component, OnInit } from '@angular/core';
import { TodoList } from '../../todoList'

@Component({
  selector: 'app-route-todo',
  templateUrl: './route-todo.component.html',
  styleUrls: ['./route-todo.component.scss']
})
export class RouteTodoComponent implements OnInit {

  todoList: TodoList[] | undefined;

  constructor() { }

  ngOnInit(): void {
    // interface TodoList {
    //   active: boolean,
    //   content: string,
    //   time: number
    // }
  
    let todoList: TodoList[] = [
      { active: false, content: '강아지랑 산책가기', time: 9 },
      { active: false, content: '쇼미더머니 생방송 챙겨보기', time: 12 },
      { active: false, content: '친구들 만나기', time: 18 },
    ];
    this.todoList = todoList;

    console.log(this.todoList)
  }

}
