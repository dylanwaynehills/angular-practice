import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TodoList, todoList } from '../../todoList';

@Component({
  selector: 'app-route-todo',
  templateUrl: './route-todo.component.html',
  styleUrls: ['./route-todo.component.scss'],
})
export class RouteTodoComponent implements OnInit {
  // 배열 안에 들어오는 값(Object)의 구조가 TodoList 인터페이스의 타입을 따라야 함
  public todoList: TodoList[] = todoList;

  // 이런식으로 제네릭 배열을 선언할수도 있음
  todoListReplica: Array<any> | null | undefined = todoList;
  // sampleList: Array<number> = [1, 2, 3];
  // sampleId: any = 'testId';
  // sampleObj = {
  //   id: 1,
  //   label: 'sample element',
  // };

  constructor() {}

  // void란 any의 반대타입으로 어떤 타입도 존재할 수 없음을 나타낸다. 보통 함수에서 반환값이 없을때 사용한다
  ngOnInit(): void {}

  toggleTodoActive<T extends number>(index: T): void {
    this.todoList[index].active = !this.todoList[index].active;
    console.log(this.todoList[index]);
  }
}
