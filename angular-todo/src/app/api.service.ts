import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
  HttpResponse,
} from '@angular/common/http';
import { Observable, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getTimeUrl: string = 'http://worldtimeapi.org/api/ip';

  constructor(private http: HttpClient) {}

  public getTimeObserve(): Observable<Object> {
    return this.http.get<any>(this.getTimeUrl);
  }

  public consoleTest() {
    console.log('api service work!');
  }
}
