import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  data;

  constructor(private dataSer:DataService) { }

  ngOnInit() {
    this.dataSer.getProject().subscribe(req => this.data = req);
  }

}
