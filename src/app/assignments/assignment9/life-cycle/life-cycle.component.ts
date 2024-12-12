import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: string = ''; // Sample input property to demonstrate ngOnChanges

  constructor(private logger: LoggerService) {
    this.logger.log('Constructor is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log('ngOnChanges is called');
    console.log('Changes:', changes);
  }

  ngOnInit(): void {
    this.logger.log('ngOnInit is called');
  }

  ngDoCheck(): void {
    this.logger.log('ngDoCheck is called');
  }

  ngAfterContentInit(): void {
    this.logger.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked(): void {
    this.logger.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit(): void {
    this.logger.log('ngAfterViewInit is called');
  }

  ngAfterViewChecked(): void {
    this.logger.log('ngAfterViewChecked is called');
  }

  ngOnDestroy(): void {
    this.logger.log('ngOnDestroy is called');
  }
}
