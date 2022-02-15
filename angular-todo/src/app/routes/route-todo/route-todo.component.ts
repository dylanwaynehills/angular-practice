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
  // dayNow
  // getTimeObserver: any;
  dayNow: any;
  dateNow: any;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    let getTimeObserver = this.apiService.getTimeObserve();
    getTimeObserver.subscribe((state: Object) => {
      let datetime: any = state;

      // dayNow
      let dateOrder = datetime.day_of_week;
      let dayOfWeek: string[] = [
        'Monday',
        'Tuseday',
        'Wednessday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sundy',
      ];
      this.dayNow = dayOfWeek[dateOrder - 1];

      // dateNow
      this.dateNow = datetime.datetime.toString().split('T')[0].split('-')[2];

      // console.log(this.dayNow);
      // console.log(this.dateNow);
      // console.log(datetime);
    });
    // subscribe 스코프를 밖에서 datetime에 접근하려 하면 undefined가 반환된다
  }

  toggleTodoActive<T extends number>(index: T): void {
    this.todoList[index].active = !this.todoList[index].active;
  }

  submitTodo(): void {
    console.log(this.form.todo);
    // Add todo
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
}
