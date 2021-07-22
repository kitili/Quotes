import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  @Input() time:any
  likes: number=0;
  dis:number =0;


  inc(){
    this.likes ++
    }
  dec(){
      this.dis ++
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
