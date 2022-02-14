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
  // todo 프로퍼티
  public todoList: TodoList[] = todoList;
  public form: Form = {
    todo: '',
  };
  public formDisabled: boolean = false;

  // observable 프로퍼티
  public dateTime: any;
  public timeNowObserver: any;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.timeNowObserver = this.apiService.getTimeObserve();
    this.timeNowObserver.subscribe((state: Object) => {
      this.dateTime = state;
    });

    console.log('datetime: ' + this.dateTime);

    // let results = this.timeNowObserver.subscribe(x => console.log(x));
  }

  toggleTodoActive<T extends number>(index: T): void {
    this.todoList[index].active = !this.todoList[index].active;
    // console.log(this.todoList[index]);

    // Disable form
    let activeList = this.todoList.map(item => item.active);
    let activeListLength = Array.from(new Set(activeList));
    // activeListLength = activeListLength.length;
    console.log(activeListLength, activeListLength.length);
    if (activeListLength.length < 2 && activeListLength[0] == true) {
      this.formDisabled = true;
    } else {
      this.formDisabled = false;
    }
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
      alert('할일을 먼저 작성해주세요');
    }
  }
}
