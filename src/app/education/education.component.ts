import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  data = [
    {
      id: 1,
      university: "元智大學",
      department: "資訊工程系",
      "major-courses": "碩士",
      "attending-date": "2010",
      "graduation-date": "2014",
      paper:"基於移動平台的鈔票辨識盲人輔助系統"
    },
    {
      id: 2,
      university: "萬能科技大學",
      department: "資訊工程系",
      "major-courses": "學士",
      "attending-date": "2007",
      "graduation-date": "2010"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
