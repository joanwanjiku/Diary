import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DiaryEvent} from '../models/diary-event';

@Component({
  selector: 'app-event-item-footer',
  templateUrl: './event-item-footer.component.html',
  styleUrls: ['./event-item-footer.component.css']
})
export class EventItemFooterComponent implements OnInit {
  
  // upvotes: number = 0;
  // downvotes: number = 0;
  @Input() event: DiaryEvent;
  @Input() index: number;
  @Output() canDelete: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  deleteEvent(deletePar: boolean){
    this.canDelete.emit(deletePar)
  }

  addDislike(){
    this.event.downvotes += 1;
  }
  addLike() {  
    this.event.upvotes += 1
  }



}
