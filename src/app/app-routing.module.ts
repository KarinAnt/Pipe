import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { EmployeeComponent } from './employee/employee.component';
import { PowerCalculatorComponent } from './power-calculator/power-calculator.component';


const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'date-pipe', component:DatePipeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'power', component:PowerCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
