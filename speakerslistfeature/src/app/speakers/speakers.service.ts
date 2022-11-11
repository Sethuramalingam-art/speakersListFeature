import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speakers } from './store/speakers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  constructor(private http: HttpClient) {}

  readonly baseURL: string = 'https://randomuser.me/api/?results=20&page=1';

  getAll(): Observable<Speakers> {
    return this.http.get<Speakers>(this.baseURL);
  }
}
