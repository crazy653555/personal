import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Profile } from "selenium-webdriver/firefox";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  data;

  constructor(private dataServ: DataService) {}

  ngOnInit() {
    this.dataServ.getProfile().subscribe(req => this.data = req);
  }
}
