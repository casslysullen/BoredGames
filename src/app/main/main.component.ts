import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "Load Main Page"

  constructor() {
    this.loadScripts();
  }


  ngOnInit(): void {

  }

  // Method to dynamically load JavaScript 
  loadScripts() {

    // This array contains all the files/CDNs 
    const dynamicScripts = [
      'assets/tron.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}

