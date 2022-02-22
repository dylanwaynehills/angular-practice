import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteIntroComponent } from './route-intro.component';

describe('RouteIntroComponent', () => {
  let component: RouteIntroComponent;
  let fixture: ComponentFixture<RouteIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
