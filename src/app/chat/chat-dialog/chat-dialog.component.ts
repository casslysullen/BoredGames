import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: any[];
  formValue: string;

  possibleGames: any[] = [
    'Pokemon.',
    'God of War.',
    "NBA 2K.",
    'Forza.',
    'Smash Bros.',
    'Chess.',]

  constructor(private chat: ChatService, private router: Router) { }

  ngOnInit(): void {
    const message = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    console.log('chatbot start');
    message.subscribe((msg) => {
      console.log('msg', msg)


      this.messages = msg.filter((mes, idx) => idx === msg.length - 1)
      console.log('messages', this.messages);
      if (this.messages.length > 0) {
        const gameSuggested = this.messages[0].content.split('is');
        console.log('games', gameSuggested);
        this.possibleGames.map((games) => {
          if (gameSuggested[gameSuggested.length - 1].trim() === games) {
            console.log('We have a match', games);
            const gamePicked = games.split('.');
            console.log('found it', gamePicked[0]);
            this.router.navigate(['/johnny5/results'], { queryParams: { data: gamePicked[0] } })
          }
        })
      }
    })
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }




}
