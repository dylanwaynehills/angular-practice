import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { RouteTodoModule } from './routes/route-todo/route-todo.module';
import { RouteIntroComponent } from './route-intro/route-intro.component';

@NgModule({
  declarations: [AppComponent, RouteIntroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // Http
    HttpClientModule,
    // Route
    RoutesModule,
    // Components
    RouteTodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
