import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPopularGames() {
    return this.http.get(environment.igdbBaseUrl + '/games/list').pipe(map((game) => (game)));
  }

  voteGame(gameData) {
    return this.http.post(
      environment.igdbBaseUrl + '/games/vote',
      gameData,
      { headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json') }
    );
  }

  getVotes() {
    return this.http.get(environment.igdbBaseUrl + '/votes').pipe(map((votes) => (votes)));
  }
}
