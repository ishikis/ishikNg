import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { People } from 'src/app/models/people';
import { removePeople } from 'src/app/state-management/actions/people.action';
import { EditModalComponent } from './edit-modal/edit-modal.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  @ViewChild('editModal') editModal: EditModalComponent;
  peoples: any;
  constructor(private store: Store<People>) { }

  ngOnInit(): void {
    this.store.select('name').subscribe((people) => {
      this.peoples = people;
    });
  }

  delete(p: People) { this.store.dispatch(removePeople(p)); }

  open(p: People) { this.editModal.openModal(p); }

}
