import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { retry } from "rxjs/operator/retry";
import { Observable } from 'rxjs';
import { Profile } from './profile';
import { Education } from './education';
import { Experience } from './experience';
import { Skill } from './skill';
import { Project } from './project';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  getProfile() :Observable<Profile>{
    return this.http.get<Profile>("./assets/json/profile.json");
  }

  getEducation() :Observable<Education>{
    return this.http.get<Education>("./assets/json/education.json");
  }

  getExperience() :Observable<Experience>{
    return this.http.get<Experience>("./assets/json/experience.json");
  }

  getSkill() :Observable<Skill>{
    return this.http.get<Skill>("./assets/json/skill.json");
  }

  getProject() :Observable<Project>{
    return this.http.get<Project>("./assets/json/project.json");
  }


}
