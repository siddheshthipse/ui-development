import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _latest = new BehaviorSubject<any>(null);

  get latestData() {
    return this._latest.asObservable();
  }

  constructor(private http: HttpClient) { }

  getData(): Observable<Object> {
    return this.http.get("https://api.chucknorris.io/jokes/random")
  }
}
