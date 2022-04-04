import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { SampleStateManagementModule } from './views/sample-state-management/sample-state-management.module';
import { UserListModule } from './views/user-list/user-list.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SampleStateManagementModule,
    UserListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
