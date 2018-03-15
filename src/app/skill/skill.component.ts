import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.css"]
})
export class SkillComponent implements OnInit {
  data: Observable<{}>;

  constructor(private dataSer: DataService) {}

  ngOnInit() {
    this.data = this.dataSer.getSkill();
  }
}
