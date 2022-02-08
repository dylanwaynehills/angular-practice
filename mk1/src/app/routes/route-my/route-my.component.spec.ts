import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMyComponent } from './route-my.component';

describe('RouteMyComponent', () => {
  let component: RouteMyComponent;
  let fixture: ComponentFixture<RouteMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteMyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
