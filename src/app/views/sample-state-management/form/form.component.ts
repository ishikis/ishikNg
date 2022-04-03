import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { People } from 'src/app/models/people';
import { JobService } from 'src/app/services/job.service';
import { MessageService } from 'src/app/services/message.service';
import { addPeople } from 'src/app/state-management/actions/people.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  jobList: { id: string, text: string }[] = [];

  isSubmited = false;
  people: Observable<string>;
  frm = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, [Validators.required, this.notWhiteSpaceValidator]),
    surname: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(2)]),
    gender: new FormControl(Validators.required),
    job: new FormControl(Validators.required)
  });

  constructor(private store: Store<People>, private messageService: MessageService, private jobservice: JobService) { this.jobList = jobservice.jobList; }

  notWhiteSpaceValidator(control: FormControl) {
    const isWhiteSpace = (control.value || '').trim().length === 0;
    return !isWhiteSpace ? null : { whiteSpace: true };
  }

  ngOnInit(): void {
    this.people = this.store.select('name');
  }

  save() {
    this.isSubmited = true;
    if (this.frm.valid) {
      let data: People = this.frm.getRawValue();
      data.id = -1;
      this.store.dispatch(addPeople(data));

      this.messageService.success('People added successfuly')
    } else {
      this.messageService.warning('Warn : Please fill the required fields')
    }
  }

  get controls() { return this.frm.controls };
}
