import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {
  // birthday = new Date();
  // birthday = new Date('2019.01.02');
  birthday = new Date(2019 ,2, 3);
  constructor() { }

  ngOnInit() {
  }

}
