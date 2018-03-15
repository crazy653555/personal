import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  data:Observable<{}> ;

  constructor(private dataSer :DataService) {}

  ngOnInit() {
    this.data = this.dataSer.getEducation();
  }
}
