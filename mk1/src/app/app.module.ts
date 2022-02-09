import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { RouteMyModule } from './routes/route-my/route-my.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // @angular/router 선언
    RouterModule,

    // routes폴더의 routes.modules.ts 선언 
    // router 모듈을 사용하는 모든 컴포넌트를 불러와 선언해야지만 오류가 안남
    RoutesModule,
    RouteMyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
