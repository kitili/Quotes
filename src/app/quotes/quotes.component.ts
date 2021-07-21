import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Audrey',"success","success depends on the number of times you get back to raise a fallen fellow you are with in the journey", 'Angel',new Date(2020,3,14),0,0),
    new Quotes(2,'Trolls',"despair","sometimes crying is what it takes to be strong ",'Trichet',new Date(2020,3,14),0,0),
    new Quotes(3,'Rasim',"life","life is a bitch",'a..s',new Date(2020,3,14),0,0)
   
  ];
  

  constructor() { }

  ngOnInit(): void {
  }
  deleteGoal(index){
    this.quotes.splice(index,1)
  }
  addNewQuote(quote){
    quote.date = new Date()
    this.quotes.push(quote)
    console.log(this.quotes)
    }

}
