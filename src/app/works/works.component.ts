import { Work } from './../interfaces/work';
import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  works: Work[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.works = this.infoService.getWorks();
  }

}
