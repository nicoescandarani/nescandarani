import { InfoService } from '../services/info.service';
import { Tech } from './../interfaces/tech';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  techs: Tech[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.techs = this.infoService.getTechs();
  }
}
