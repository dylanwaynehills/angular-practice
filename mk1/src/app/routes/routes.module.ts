import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouteMyComponent } from './route-my/route-my.component';

// @angular/router의 Routes를 사용해서 라우팅 구조를 routes에 할당
const routes: Routes = [
  {
    path: 'my',
    component: RouteMyComponent
  }   
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule { }
