import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMyNavComponent } from './route-my-nav.component';

describe('RouteMyNavComponent', () => {
  let component: RouteMyNavComponent;
  let fixture: ComponentFixture<RouteMyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteMyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
