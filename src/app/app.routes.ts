import { MainAssignmentComponent } from './assignments/main-assignment/main-assignment.component';
import { Routes } from '@angular/router';
import { EmployeecardComponent } from './components/employeecard/employeecard.component';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3Component } from './assignments/assignment3/assignment3.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { Assignment5Component } from './assignments/assignment5/assignment5.component';
import { Assignment6Component } from './assignments/assignment6/assignment6.component';
import { Assignment7Component } from './assignments/assignment7/assignment7.component';
import { Assignment8Component } from './assignments/assignment8/assignment8.component';
import { Assignment9Component } from './assignments/assignment9/assignment9.component';
import { Assignment10Component } from './assignments/assignment10/assignment10.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { Assignment11Component } from './assignments/assignment11/assignment11.component';
import { Assignment12Component } from './assignments/assignment12/assignment12.component';
import { Assignment13Component } from './assignments/assignment13/assignment13.component';
import { Assignment15Component } from './assignments/assignment15/assignment15.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeecardComponent,
  },

  {
    path: 'register',
    component: FormComponent,
  },

  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'r_ser',
    component: EmployeecardComponent,
  },

  {
    path: 'blog',
    component: BlogComponent,
  },
  // {
  //   path: 'assignments',
  //   component: MainAssignmentComponent,
  // },

  //  Nested Routing
  {
    path: 'assignments',
    component: MainAssignmentComponent,
    children: [
      { path: '', component: Assignment1Component },
      { path: '1', component: Assignment1Component },
      { path: '2', component: Assignment2Component },
      { path: '3', component: Assignment3Component },
      { path: '4', component: Assignment4Component },
      { path: '5', component: Assignment5Component },
      { path: '6', component: Assignment6Component },
      { path: '7', component: Assignment7Component },
      { path: '8', component: Assignment8Component },
      { path: '9', component: Assignment9Component },
      { path: '10', component: Assignment10Component },
      { path: '11', component: Assignment11Component },
      { path: '12', component: Assignment12Component },
      { path: '13', component: Assignment13Component },
    ],
  },

  { path: '**', component: PagenotfoundComponent },
];
