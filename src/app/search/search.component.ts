import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameapiService } from '../gameapi.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  characters: any;
  rating: any;
  name: any;
  routTo: string;
  searchTerms = new Subject<string>();
  games: any;
  route: any;


  constructor(private gameService: GameapiService) {
    this.gameService.search(this.searchTerms).subscribe(data => {
      this.games = data;
    },
      err => console.log(err),
      () => console.log('err', this.games)
    );
  }


  getGame() {
    this.gameService.getGame().subscribe(data => {
      this.games = data;
      console.log('game', this.games);
      console.log('game name', this.games.results[0].name)
    })
  }

  getPlatform() {
    this.gameService.getPlatform().subscribe(data => {
      this.games = data;
      console.log('platform', this.games);
      console.log('platform name', this.games.results[0].name)
    })
  }

  getCharacters() {
    this.gameService.getCharacters().subscribe(data => {
      this.games = data;
      console.log('character', this.games);
      console.log('character name', this.games.results[0].name)
    })
  }

  getRating() {
    this.gameService.getRating().subscribe(data => {
      this.games = data;
      console.log('rating', this.games);
      console.log('rating name', this.games.results[0].name)
    })
  }
  getReviews(score) {
    this.gameService.getReviews(score).subscribe(data => {
      this.games = data;
      console.log('review', this.games);
      console.log('review name', this.games.results[0].name)
    })
  }


  getRegion() {
    this.gameService.getRegion().subscribe(data => {
      this.games = data;
      console.log('region', this.games);
      console.log('region name', this.games.results[0].name)
    })

  }
  getName() {
    this.gameService.getName().subscribe(data => {
      this.games = data;
      console.log('name', this.games);
      console.log('names', this.games.results[0].name)
    })
  }



  ngOnInit(): void {

    // this.gameService.search(this.searchTerms).subscribe(data => {
    //   this.games = data;
    //   console.log(this.games);
    // });
    this.gameService.getGame().subscribe(data => {
      this.games = data;
      console.log(this.games);
    })


    this.getName()
    // this.route.url.subscribe(params => {
    //   this.routTo = params[0].path;

    //   switch (this.routTo) {
    //     case 'characters':
    //       //get characters
    //       this.getCharacters();
    //       break;

    //     case 'platform':
    //       //get platform
    //       this.getPlatform();
    //       break;

    //     case 'rating':
    //       //get rating
    //       this.getRating();
    //       break;

    //     case 'region':
    //       //get region
    //       this.getRegion();
    //       break;

    //     // case 'reviews':
    //     //   //get reviews
    //     //   this.getReviews(score);
    //     //   break;

    //     case 'name':
    //       //get name
    //       this.getName();
    //       break;

    //     default:
    //       //route to home

    //       break;
    //   };

    // });

  };
  // // get routes

}


