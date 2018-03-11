import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Profile } from 'selenium-webdriver/firefox';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data;
  show: any;

  constructor(private dataServ: DataService, private _db: AngularFireDatabase) { }

  ngOnInit() {
    this.dataServ.getProfile().subscribe(req => this.data = req);
    this.show = this._db.list('profile').snapshotChanges();
  }
}
