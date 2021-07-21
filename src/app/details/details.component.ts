import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
@Input() quote:Quotes
@Output() delete = new EventEmitter()
likes = 0
dislikes = 0

  constructor() { }

  ngOnInit(): void {
  }
  addLikes(){
    this.likes++
  }
  addDislikes(){
    this.dislikes++
  }
  quoteDelete(){
    this.delete.emit()
  }

}
