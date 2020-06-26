import { Component, OnInit } from '@angular/core';
import { GameapiService } from '../gameapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  details;
  name;

  constructor(private pc: GameapiService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.name = params['data'] ? params['data'] : null;
    })
    this.pc.searchEntries(this.name).subscribe((data) => {
      this.details = data;
      console.log('data', data);
    })

  }
}

