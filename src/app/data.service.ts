import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { retry } from "rxjs/operator/retry";
import { Observable } from 'rxjs';
import { Profile } from './profile';
import { Education } from './education';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  getProfile() :Observable<Profile>{
    return this.http.get<Profile>("/assets/json/profile.json");
  }

  getEducation() :Observable<Education>{
    return this.http.get<Education>("/assets/json/education.json");
  }


}
