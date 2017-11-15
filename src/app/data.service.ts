import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { retry } from "rxjs/operator/retry";
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  obs$: Observable<any>;

  constructor(private http: HttpClient) {}

  getProfile() :Observable<any>{
    this.obs$ = this.http.get("/assets/json/personal.json");
    return this.obs$;
  }
}
