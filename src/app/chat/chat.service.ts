import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string, public hideImage: boolean, public hideNextImage:boolean, public hideMap:boolean, 
    public boxSize: string) {}
}

@Injectable()
export class ChatService {


  container: HTMLElement;
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {
    var botMessage = new Message('Hey!', 'bot', true, true, true, '70%');
      this.update(botMessage);
  }
  scrollBottom() {         
    this.container = document.getElementById("msgContainer");       
    this.container.scroll({
      top: this.container.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }  
  // Sends and receives messages via DialogFlow
  async converse(msg: string) {
    var boxSize= '';
    var response='';
    if(msg === "Hi! Please introduce yourself" || msg === "I didn't recognize you"){
      boxSize = this.getBoxSize(msg);
      const userMessage = new Message(msg, 'user',true,true, true,'33%');
      this.update(userMessage);
      await this.delay(1000);
      this.scrollBottom();
      response = "Gaurav and Shruti are busy in wedding preparations";
      boxSize = this.getBoxSize(response);
      const botMessage = new Message(response, 'bot',true, true, true,'35%');
      this.update(botMessage);
      await this.delay(1200);
      this.scrollBottom();
      response = "So I took the task to invite you for their wedding!"
      boxSize = this.getBoxSize(response); 
      const botMessage1 = new Message(response ,'bot', true, true, true,'30%')
      this.update(botMessage1);
      await this.delay(1200);
      this.scrollBottom();
      response = "Oh Yeah!! You got it right!!"
      boxSize = this.getBoxSize(response); 
      const botMessage2 = new Message(response, 'bot', true, true, true,'37%')
      this.update(botMessage2);
      await this.delay(1200);
      this.scrollBottom();
      response = "Gaurav and Shruti are getting married :)"
      boxSize = this.getBoxSize(response); 
      const botMessage3 = new Message(response, 'bot', true, true, true,boxSize)
      this.update(botMessage3);
      await this.delay(1200);
      this.scrollBottom();
      response = "and I want you to be part of  this celebration"
      boxSize = this.getBoxSize(response); 
      const botMessage4 = new Message(response, 'bot', true, true, true,boxSize)
      this.update(botMessage4);
      await this.delay(1000);
      this.scrollBottom();
      response = "As they take the next step together"
      boxSize = this.getBoxSize(response); 
      const botMessage5 = new Message(response, 'bot', true, true, true,boxSize)
      this.update(botMessage5);
      await this.delay(1000);
      this.scrollBottom();
    }
    else if(msg ==="Yes I remember!"|| msg ==="Thanks for reminding me"){
      boxSize = this.getBoxSize(msg);
      const userMessage = new Message(msg, 'user',true,true, true,boxSize);
      this.update(userMessage);
      await this.delay(1000);
      this.scrollBottom();
      response = 'Yeah! It is pretty exciting'
      boxSize = this.getBoxSize(response); 
      const botMessage = new Message(response, 'bot',true,true, true,boxSize);
      this.update(botMessage);
      await this.delay(1000);
      this.scrollBottom();
      
    }
    else if(msg === 'When is the wedding?'){
      response = 'When is the wedding?'
      boxSize = this.getBoxSize(response); 
      const userMessage = new Message(response, 'user',true,true, true,'44%');
      this.update(userMessage);
      await this.delay(1000);
      this.scrollBottom();
      response = "Wedding is on 10-Feb-2020"
      boxSize = this.getBoxSize(response); 
      const botMessage4 = new Message(response, 'bot', true, true, true,'36%')
      this.update(botMessage4);
      await this.delay(1000);
      this.scrollBottom();
      var days = this.getNumberOfDays();
      response = "Only " + days + " days to go... Yayy!";
      boxSize = this.getBoxSize(response); 
      const botMessage5 = new Message(response, 'bot', true, true, true,'30%')
      this.update(botMessage5);
      await this.delay(1000);
      this.scrollBottom();
      response = "Here is the wedding invitation"
      boxSize = this.getBoxSize(response); 
      const botMessage6 = new Message(response, 'bot', false, true, true,'30%')
      this.update(botMessage6);
      await this.delay(1000);
      this.scrollBottom();
    }
    else if (msg === "Do you have some pics of the couple??"){
      response = 'Do you have some pics of the couple??'
      boxSize = this.getBoxSize(response); 
      const userMessage = new Message(response, 'user',true,true, true,boxSize);
      this.update(userMessage);
      await this.delay(1000);
      this.scrollBottom();
      response = "Yes I have and would be more than happy to share with you :)"
      boxSize = this.getBoxSize(response); 
      const botMessage5 = new Message(response, 'bot', true, false, true,boxSize)
      this.update(botMessage5);
      await this.delay(1000);
      this.scrollBottom();
      response = "They look great together right ?!!"
      boxSize = this.getBoxSize(response); 
      const botMessage6 = new Message(response, 'bot', true, true, true,boxSize)
      this.update(botMessage6);
      await this.delay(1000);
      this.scrollBottom();
      
      

    }
    else if(msg ==='Where do I need to come?'){
      response = msg
      boxSize = this.getBoxSize(response); 
      const userMessage = new Message(response, 'user',true,true, true,boxSize);
      this.update(userMessage);
      await this.delay(1000);
      this.scrollBottom();
      response = "You to need to come at following address ";
      boxSize = this.getBoxSize(response);
      const botMessage9 = new Message(response, 'bot', true, true, true,boxSize)
      this.update(botMessage9);
      await this.delay(1000);
      this.scrollBottom();
      response = "ELARA Banquet Hall, Sector - 4 Vasundhara, Ghaziabad ";
      boxSize = this.getBoxSize(response);
      const botMessage10 = new Message(response, 'bot', true, true, false,boxSize)
      this.update(botMessage10);
      await this.delay(2000);
      this.scrollBottom()
      response = "Please do come and pour your blessings :)"
      boxSize = this.getBoxSize(response); 
      const botMessage7 = new Message(response, 'bot', true, true, true,boxSize)
      this.update(botMessage7);
      await this.delay(1000);
      this.scrollBottom();
      response = "Your presence will be highly appreciated"
      boxSize = this.getBoxSize(response); 
      const botMessage8 = new Message(response, 'bot', true, true, true,boxSize)
      this.update(botMessage8);
      await this.delay(1000);
      this.scrollBottom();
    }
    else if(msg ==='Thanks for the Upadte'){
      response = msg
      boxSize = this.getBoxSize(response); 
      const userMessage = new Message(response, 'user',true,true, true,boxSize);
      this.update(userMessage);
      await this.delay(1000);
      this.scrollBottom();
      var newYear = this.checkIfNewYear();
      if(newYear === 'true'){
        response = "Oh Wait!"
        boxSize = this.getBoxSize(response); 
        const botMessage8 = new Message(response, 'bot', true, true, true,boxSize)
        this.update(botMessage8);
        await this.delay(1000);
        this.scrollBottom();
        response = "Wishing you and your family on behalf of Gaurav and Shruti"
        boxSize = this.getBoxSize(response); 
        const botMessage9 = new Message(response, 'bot', true, true, true,boxSize)
        this.update(botMessage9);
        await this.delay(1000);
        this.scrollBottom();
        response = "Happy New Year :) :)"
        boxSize = this.getBoxSize(response); 
        const botMessage10 = new Message(response, 'bot', true, true, true,boxSize)
        this.update(botMessage10);
        await this.delay(1000);
        this.scrollBottom();
        response = "Have a great year ahead"
        boxSize = this.getBoxSize(response); 
        const botMessage11 = new Message(response, 'bot', true, true, true,boxSize)
        this.update(botMessage11);
        await this.delay(1000);
        this.scrollBottom();
        response = "Will see you at the wedding!"
        boxSize = this.getBoxSize(response); 
        const botMessage12 = new Message(response, 'bot', true, true, true,boxSize)
        this.update(botMessage12);
        await this.delay(1000);
        this.scrollBottom();
      }
      else{
        response = "Gaurav and Shruti are pretty excited to attend you at the wedding!"
        boxSize = this.getBoxSize(response); 
        const botMessage8 = new Message(response, 'bot', true, true, true,boxSize)
        this.update(botMessage8);
        await this.delay(1000);
        this.scrollBottom();
        response = "See you soon"
        boxSize = this.getBoxSize(response); 
        const botMessage9 = new Message(response, 'bot', true, true, true,boxSize)
        this.update(botMessage9);
        await this.delay(1000);
        this.scrollBottom();
      }
    }
    /*else{
      const userMessage = new Message(msg, 'user',true,true, true);
      this.update(userMessage);
      await this.delay(1000);
      this.scrollBottom();
      const botMessage = new Message('bye', 'bot', true, true, true);
      this.update(botMessage);
      await this.delay(1000);
      this.scrollBottom();
  
    }*/
    await this.delay(1000);
    this.scrollBottom();

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
    
  }

  getBoxSize(input:string){
    var boxSize='';
    if (input.length<6){
        boxSize = '80%';
    }
    else if(input.length+20>40){
      boxSize = '40%';
    }
    else{
      boxSize = (100- (input.length+32)).toString() + '%';
    }
    return boxSize;  
  }

  getNumberOfDays(){
    var currMonth = new Date().getMonth() + 1 ;
    var currYear =  new Date().getFullYear();
    var currDate = new Date().getDate();
    console.log(currMonth);
    console.log(currYear);
    console.log(currDate);

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(currYear, currMonth, currDate);
    const secondDate = new Date(2020, 2, 10);
    var diffTime = firstDate.getTime()-secondDate.getTime();
    var diffDays = Math.abs(diffTime/oneDay).toString();
    console.log(diffDays);

    return diffDays;
  }

  checkIfNewYear(){
    var currDate = new Date().getDate();
    if(currDate <=6 && currDate >=1){
        return 'true';
    }
    return 'false';
  }

}