import { Component, OnInit, Input } from '@angular/core';
import { DiaryEvent } from '../models/diary-event'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  

  events: DiaryEvent[];
  constructor() {
    this.events = [
      new DiaryEvent(1, "Birthday", "An amazing day", "Joan", new Date(2020, 8,21)),
      new DiaryEvent(2, "Graduation", "An amazing day", "Brian", new Date(2018, 4,1)),
      new DiaryEvent(3, "Wedding", "An amazing day", "Amos", new Date(2019, 1,16))
    ]
   }

  toggleFooter(index){
    this.events[index].showFooter = !this.events[index].showFooter;
  }

  deleteEvent(ableToDel, index){
    if(ableToDel){
      this.events.splice(index, 1)
    }
  }
  addsEvent(event){
    let goalLength = this.events.length;
    event.id = goalLength+1;
    console.log(event)
    event.date = new Date(event.date)
    this.events.push(event)
  }
  ngOnInit(): void {
  }

}
