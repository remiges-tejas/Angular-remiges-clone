import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-assignment',
  imports: [RouterOutlet, RouterLink,RouterModule,RouterLinkActive],
  templateUrl: './main-assignment.component.html',
  styleUrl: './main-assignment.component.css',
})
export class MainAssignmentComponent {}
