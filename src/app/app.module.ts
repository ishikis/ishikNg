import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { peopleReducer } from './state-management/reducers/people.reducer';
import { FormComponent } from './views/sample-state-management/form/form.component';
import { ListComponent } from './views/sample-state-management/list/list.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { PaginationComponent } from './views/user-list/pagination/pagination.component';
import { EditModalComponent } from './views/sample-state-management/list/edit-modal/edit-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { SampleStateManagementComponent } from './views/sample-state-management/sample-state-management.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    UserListComponent,
    UserFilterPipe,
    PaginationComponent,
    EditModalComponent,
    SampleStateManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({
      name: peopleReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
