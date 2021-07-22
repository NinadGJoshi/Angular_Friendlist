import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  public newFriend: string = '';
  @Output() newFriendAddedEE = new EventEmitter();

  public addNewFriend() : void{
    this.newFriendAddedEE.emit(this.newFriend);
    this.clearText();
  }

  private clearText() : void{
    this.newFriend = '';
  }

  public onKeyPressed(event: any): void{
    if(event.keyCode === 13){
      this.addNewFriend();
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
