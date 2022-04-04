import { NgModule } from '@angular/core';
import { SampleStateManagementComponent } from './sample-state-management.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EditModalComponent } from './list/edit-modal/edit-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SampleStateManagementComponent,
        ListComponent,
        EditModalComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        ModalModule.forRoot()
    ],
    
    exports: [],
    providers: [],
})
export class SampleStateManagementModule { }
