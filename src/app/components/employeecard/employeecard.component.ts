import { Component } from '@angular/core';
import { EmployeeserviceService } from '../../services/employeeservice.service';

@Component({
  selector: 'app-employeecard',
  imports: [],
  templateUrl: './employeecard.component.html',
  styleUrl: './employeecard.component.css',
})
export class EmployeecardComponent {
  constructor(private dataservice: EmployeeserviceService) {}

  users: any[] = [];

  ngOnInit(): void {
    this.dataservice.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
