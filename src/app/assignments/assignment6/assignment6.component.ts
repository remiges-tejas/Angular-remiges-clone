import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment6',
  imports: [],
  templateUrl: './assignment6.component.html',
  styleUrl: './assignment6.component.css',
})
export class Assignment6Component {
  username: string = 'Virat Kohli';
  title = 'Upcoming RCB Captain';
  isvisible: boolean = false;

  displayProfile() {
    if (this.isvisible) {
      this.isvisible = false;
    } else {
      this.isvisible = true;
    }
  }
}
