import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DiaryEvent } from '../models/diary-event';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  @Output() addEvent: EventEmitter<any> =  new EventEmitter() 

  newEvent: DiaryEvent;
  constructor() { 
    this.newEvent = new DiaryEvent(0,"", "", "", new Date)
  }

  onSubmit() {
    
    this.addEvent.emit(this.newEvent)
  }
  ngOnInit(): void {
  }

}
