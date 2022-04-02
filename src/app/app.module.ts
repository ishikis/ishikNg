import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { peopleReducer } from './state-management/reducers/people.reducer';
import { FormComponent } from './views/form/form.component';
import { ListComponent } from './views/list/list.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { PaginationComponent } from './views/user-list/pagination/pagination.component';
import { EditModalComponent } from './views/list/edit-modal/edit-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserFilterPipe } from './pipes/user-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    UserListComponent,
    UserFilterPipe,
    PaginationComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({
      name: peopleReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
