import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameapiService {
  games;

  baseUrl = 'https://api-v3.igdb.com/games';
  API_KEY = 'user-key:06140356b004cf4a23560c7cd95af899';


  constructor(private http: HttpClient) { }

  getGames() {

  }
}


