import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserFilterPipe } from 'src/app/pipes/user-filter.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import { peopleReducer } from 'src/app/state-management/reducers/people.reducer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UserListComponent,
        UserFilterPipe,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({
            name: peopleReducer,
        })
    ],
    exports: [],
    providers: [],
})
export class UserListModule { }