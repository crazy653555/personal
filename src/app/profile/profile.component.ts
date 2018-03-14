import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Profile } from 'selenium-webdriver/firefox';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  itemsCollection: any;
  data: any;

  constructor(private dataServ: DataService, private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('EasonResume').doc('profile');
    this.data = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
  }
}
