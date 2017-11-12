import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data = {
    name:'鄭清源',
    content:'目前任職於健行科 技大學系統開發組，主要負責會計系統、出納系統、財管系統、計畫編列系統的開發及維護，工作環境為 ASP.NET Web Forms、MSSQL、C#、VB、SVN。因興趣自主學習了ASP.NET MVC、ASP.NET WEB API 、Angular 4、Bootstrapt、Git等。',
    email:'crazy653555@gmail.com',
    location:'桃園市龍潭區'
  }

  constructor() { }

  ngOnInit() {
  }

}
