import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-assignment7',
  imports: [],
  templateUrl: './assignment7.component.html',
  styleUrl: './assignment7.component.css',
})
export class Assignment7Component {
  constructor(private logger: LoggerService) {
    this.logger.log('Using a logger service');
  }

  count = 0;

  incrementCount() {
    this.count++;
    this.logger.log(` Count is : ${this.count}`);
  }
}
