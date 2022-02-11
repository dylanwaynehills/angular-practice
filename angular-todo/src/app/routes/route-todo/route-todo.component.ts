import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TestBed } from '@angular/core/testing';
import { TodoList, todoList } from '../../todoList';

interface Form {
  todo: Event | string | null;
}

@Component({
  selector: 'app-route-todo',
  templateUrl: './route-todo.component.html',
  styleUrls: ['./route-todo.component.scss'],
})
export class RouteTodoComponent implements OnInit {
  // 배열 안에 들어오는 값(Object)의 구조가 TodoList 인터페이스의 타입을 따라야 함
  public todoList: TodoList[] = todoList;
  public form: Form = {
    todo: '',
  };

  constructor() {}

  // void란 any의 반대타입으로 어떤 타입도 존재할 수 없음을 나타낸다. 보통 함수에서 반환값이 없을때 사용한다
  ngOnInit(): void {
    this.form.todo = '';
  }

  toggleTodoActive<T extends number>(index: T): void {
    this.todoList[index].active = !this.todoList[index].active;
    console.log(this.todoList[index]);
  }

  submitTodo(): void {
    console.log(this.form.todo);
    if (this.form.todo != '') {
      this.todoList.push({
        active: false,
        content: this.form.todo,
        time: {
          hour: 24,
          minutes: '00',
        },
      });
      this.form.todo = '';
    } else {
      alert('할일을 먼저 작성해주세요');
    }
  }
}
