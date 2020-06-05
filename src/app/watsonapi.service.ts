import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WatsonapiService {


  constructor(private http: HttpClient) { }

  getSherlock() {

  }
}
