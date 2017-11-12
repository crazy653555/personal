import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  data=[
    {
      "organization-name": "健行科技大學",
      "position": "專任助理",
      "location":" 桃園市中壢區",
      "description-of-responsibility": "負責行政業務及校內系統設計與維護。目前負責會計系統、出納系統、財管系統、計畫編列系統開發及維護",
      "start": "2013/04",
      "end": "在職"
    }, {
      "organization-name": "博聯網路公司",
      "location":" 桃園市中壢區",
      "position": "工程師",
      "description-of-responsibility": "負責軟硬體維護組裝、網路維護、採購、行政業務",
      "start": "2010/10",
      "end": "2010/03"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
