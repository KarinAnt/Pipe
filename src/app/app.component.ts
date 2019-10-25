import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is Angular PIPE presentation';
  todaydate = new Date();
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};
}
