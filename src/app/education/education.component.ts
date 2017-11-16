import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  data ;

  constructor(private dataSer :DataService) {}

  ngOnInit() {
    this.dataSer.getEducation().subscribe(req => this.data = req);
  }
}
