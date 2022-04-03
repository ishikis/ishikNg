import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { People } from 'src/app/models/people';
import { JobService } from 'src/app/services/job.service';
import { editPeople } from 'src/app/state-management/actions/people.action';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html'
})
export class EditModalComponent {
  @ViewChild('template') modal: ModalDirective;
  people: People;
  jobList: { id: string, text: string }[] = [];
  constructor(private store: Store<People>, private jobservice: JobService) { this.jobList = jobservice.jobList; }

  openModal(p: People) {
    debugger;
    this.people = JSON.parse(JSON.stringify(p));
    this.modal.show();
  }

  close() {
    this.modal.hide();
  }

  save() {
    this.store.dispatch(editPeople(this.people));
    this.modal.hide();

  }

}
