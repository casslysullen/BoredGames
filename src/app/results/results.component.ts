import { Component, OnInit } from '@angular/core';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
