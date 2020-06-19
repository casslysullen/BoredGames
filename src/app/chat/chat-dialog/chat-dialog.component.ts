import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';



@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: any[];
  formValue: string;

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
    const message = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    console.log('chatbot start');
    message.subscribe((msg) => {
      console.log('msg', msg)
      this.messages = msg.filter((mes, idx) => idx === msg.length - 1)
    })
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

}
