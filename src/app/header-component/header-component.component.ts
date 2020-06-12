import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  heading: string = 'Diary';
  subHeading: string = 'Jolt down your thoughts';
  
  constructor() { }

  ngOnInit(): void {
  }

}
