import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMyNavComponent } from './route-my-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RouteMyNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouteMyNavComponent
  ]
})
export class RouteMyNavModule { }
