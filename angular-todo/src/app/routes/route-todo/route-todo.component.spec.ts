import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTodoComponent } from './route-todo.component';

describe('RouteTodoComponent', () => {
  let component: RouteTodoComponent;
  let fixture: ComponentFixture<RouteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
