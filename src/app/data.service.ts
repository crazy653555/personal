import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operator/retry';
import { Observable } from 'rxjs/Observable';
import { Profile } from './profile';
import { Education } from './education';
import { Experience } from './experience';
import { Skill } from './skill';
import { Project } from './project';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  // 個人資料
  getProfile(): Observable<{}> {
    return this.afs
      .collection('/EasonResume')
      .doc('eason')
      .valueChanges();
  }

  // 經驗
  getExperience(): Observable<{}[]> {
    return this.afs.collection('/EasonResume/eason/experience').valueChanges();
  }

  // 學歷
  getEducation(): Observable<{}[]> {
    return this.afs.collection('/EasonResume/eason/education').valueChanges();
  }

  // 技能
  getSkill(): Observable<{}[]> {
    return this.afs.collection('/EasonResume/eason/skills').valueChanges();
  }

  // 專案
  getProject(): Observable<{}[]> {
    return this.afs.collection('/EasonResume/eason/projects').valueChanges();

  }
}
