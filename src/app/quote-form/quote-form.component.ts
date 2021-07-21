import { Quotes } from '../quotes';
import { Component,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quotes(0,'','',"","",new Date(),0,0)
  @Output() addQuote = new EventEmitter()
 

  constructor() { }

  ngOnInit(): void {
  }
  submitQuote(){
    this.addQuote.emit(this.newQuote)}
  

}
