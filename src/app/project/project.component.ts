import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  data:Observable<{}>;

  constructor(private dataSer:DataService) { }

  ngOnInit() {
    this.data = this.dataSer.getProject();
  }

}
