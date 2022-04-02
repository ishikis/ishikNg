import { Injectable } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { pagination } from '../models/pagination';

@Injectable({
    providedIn: 'root'
})
export class GridService {
    data: pagination;

    paginationInfo = new BehaviorSubject(null);

    constructor() {
        this.data = { current: 0, rowCount: 0, size: 2 } as pagination;
        this.paginationInfo.next(this.data);
    }


    setRowCount(value: number) {
        this.data.rowCount = value;
        this.paginationInfo.next(this.data);
    }

    setSizePerPage(value: number) {
        this.data.size = value;
        this.paginationInfo.next(this.data);
    }

    setCurrentPage(value: number) {
        this.data.current = value;
        this.paginationInfo.next(this.data);
    }
}