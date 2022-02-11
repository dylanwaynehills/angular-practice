import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { RouteTodoModule } from './routes/route-todo/route-todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // Route
    RoutesModule,
    // Components
    RouteTodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
