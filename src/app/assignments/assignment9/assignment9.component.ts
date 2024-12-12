import { Component } from '@angular/core';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@Component({
  selector: 'app-assignment9',
  imports: [LifeCycleComponent],
  templateUrl: './assignment9.component.html',
  styleUrl: './assignment9.component.css',
})
export class Assignment9Component {
  data = 'Initial Value';

  changeData(): void {
    this.data = 'Changed Value';
  }
}
