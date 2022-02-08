import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';

import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // @angular/router 사용
    RouterModule,
    // routes폴더의 routes.modules.ts 사용
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
