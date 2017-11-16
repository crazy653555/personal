import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  data;

  constructor(private dataSer:DataService) { }

  ngOnInit() {
    this.dataSer.getExperience().subscribe(req => this.data = req);
  }

}
