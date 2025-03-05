import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiUrl = 'https://akabab.github.io/superhero-api/api'

  constructor(private http: HttpClient) {}

  getallHeroes(): Observable<any>{
    return this.http.get(`${this.apiUrl}/all.json`);
  }

}



