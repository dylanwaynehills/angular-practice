import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteMyComponent } from './route-my.component';
import { RouteMyNavModule } from './route-my-nav/route-my-nav.module';

@NgModule({
  declarations: [
    RouteMyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouteMyNavModule
  ],
  exports: [
    RouteMyComponent
  ]
})
export class RouteMyModule { }
