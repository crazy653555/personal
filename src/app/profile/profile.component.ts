import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Profile } from "selenium-webdriver/firefox";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  data: Observable<{}>;
  data2: any;
  constructor(private dataServ: DataService) {}

  ngOnInit() {
    this.data = this.dataServ.getProfile();
  }
}
