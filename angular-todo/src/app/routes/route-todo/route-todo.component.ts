import { Component, OnInit } from '@angular/core';
import { TodoList, todoList } from '../../todoList';
import { ApiService } from 'src/app/api.service';

interface Form {
  todo: Event | string | null;
}

@Component({
  selector: 'app-route-todo',
  templateUrl: './route-todo.component.html',
  styleUrls: ['./route-todo.component.scss'],
})
export class RouteTodoComponent implements OnInit {
  // todo
  todoList: TodoList[] = todoList;
  form: Form = {
    todo: '',
  };
  formDisabled: boolean = false;
  // datetime
  getTimeObserver: any;
  datetime: any;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.getTimeObserver = this.apiService.getTimeObserve();
    this.getTimeObserver.subscribe((state: Object) => {
      this.datetime = state;
      console.log(this.datetime);
    });
    // subscribe 스코프를 벗어난곳에서 datetime프로퍼티에 접근하려 하면 undefined가 반환된다
    console.log(this.datetime);
  }

  toggleTodoActive<T extends number>(index: T): void {
    this.todoList[index].active = !this.todoList[index].active;
  }

  submitTodo(): void {
    console.log(this.form.todo);
    /**
     * Add todo
     */
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
      // alert('할일을 먼저 작성해주세요');
    }
  }

  getTimeEx() {
    console.log(this.datetime);
  }
}
