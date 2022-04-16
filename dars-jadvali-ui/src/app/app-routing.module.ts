import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTableComponent } from './all-table/all-table.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'all-table',component:AllTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
