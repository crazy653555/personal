import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  data ;

  constructor(private dataSer:DataService) { }

  ngOnInit() {
    this.dataSer.getSkill().subscribe(req => this.data = req);
  }

}
