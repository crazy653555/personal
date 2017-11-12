import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  data = [
    {
      id:1,
      title:'語言',
      skills:[
        'C#','VB','Java','HTML','CSS','JavaScript','jQuery','T-SQL','LINQ'
      ]
    },
    {
      id:2,
      title:'框架',
      skills:[
        'ASP.NET','WebFrome','ASP.NET MVC,','Angular','Entity Framework','Bootstrap','Android'
      ]
    },
    {
      id:3,
      title:'資料庫',
      skills:[
        'MSSQL'
      ]
    },
    {
      id:4,
      title:'版控',
      skills:[
        'git','github','svn'
      ]
    },
    {
      id:5,
      title:'工具',
      skills:[
        'Visual Studio','Visual Studio Code','eclipse','SQL Server Mangement','LinqPad'
      ]
    },   {
      id:6,
      title:'證照',
      skills:[
        'SCJP','丙級電腦硬體裝修技術士','丙級網頁設計技術士','堆高機操作技術士'
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
