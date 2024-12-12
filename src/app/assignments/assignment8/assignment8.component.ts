import { Component } from '@angular/core';
import { Assignment7Component } from '../assignment7/assignment7.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-assignment8',
  imports: [],
  templateUrl: './assignment8.component.html',
  styleUrl: './assignment8.component.css',
})
export class Assignment8Component {
  constructor(private logger: LoggerService) {
    this.logger.log('Using a logger service');
  }

  count = 0;

  incrementCount() {
    this.count++;
    this.logger.log(` Count is : ${this.count}`);
  }
}
