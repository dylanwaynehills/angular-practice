import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MyComponent } from './my/my.component';

import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { RouteMyModule } from './routes/route-my/route-my.module';


@NgModule({
  declarations: [
    AppComponent,
    // MyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // @angular/router 사용
    RouterModule,
    // routes폴더의 routes.modules.ts 사용
    // router사용하는 모든 모듈을 하단에 선언해야지만 컴포넌트를 불러오는것이 가능해짐
    RoutesModule,
    RouteMyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
