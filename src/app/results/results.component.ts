import { Component, OnInit } from '@angular/core';
import { GameapiService } from '../gameapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private pc: GameapiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pc.searchEntries(this.activatedRoute.params.data).subscribe((data) => {
      console.log('data', data);
    })
  }
}
