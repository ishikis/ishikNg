import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleStateManagementComponent } from './views/sample-state-management/sample-state-management.component';
import { UserListComponent } from './views/user-list/user-list.component';

const routes: Routes = [
  { path: 'state-managment', component: SampleStateManagementComponent },
  { path: 'data-table', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
