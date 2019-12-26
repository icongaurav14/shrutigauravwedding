import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import {scan } from 'rxjs/operators';



@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
  
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  autoMessages : string[];
  hideImage : boolean;
  percentageVal : string;
  container: HTMLElement;
  hideButton : string;

  constructor(public chat: ChatService) { 
    
    this.autoMessages = ["Hi! Please introduce yourself", "I didn't recognize you"] ;
    this.hideImage =  true;
    this.percentageVal = '60%';
    this.hideButton = 'inline';
  }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
    .pipe(
        scan((acc, val) => acc.concat(val) )
    )
   
    
  }

 
  sendMessage(data) {
   
    this.chat.converse(data);
    if(data === "Hi! Please introduce yourself" || data === "I didn't recognize you"){
      this.autoMessages = ['Yes I remember!', 'Thanks for reminding me'];
    }
    else if(data ==="Yes I remember!"|| data ==="Thanks for reminding me"){
      this.autoMessages = ["When is the wedding?"];
    }
    else if (data === "When is the wedding?"){
      this.autoMessages = ["Where do I need to come?"];
    }
    else if (data === "Where do I need to come?"){
      this.autoMessages = ['Do you have some pics of the couple??'];
    }
    else if (data === "Do you have some pics of the couple??"){
      this.autoMessages = ['Thanks for the Upadte'];
      this.hideButton = 'inline';
    }
    else if (data === "Thanks for the Upadte"){
      this.autoMessages = [];
      this.hideButton = 'none';
    }
    
    this.formValue = '';
  }

}