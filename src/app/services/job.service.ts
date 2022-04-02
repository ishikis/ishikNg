import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JobService {

    jobList = [
        { id: 'Mühendis', text: 'Mühendis' },
        { id: 'Öğretmen', text: 'Öğretmen' },
        { id: 'Doktor', text: 'Doktor' },
        { id: 'Hemşire', text: 'Hemşire' },
    ];

}