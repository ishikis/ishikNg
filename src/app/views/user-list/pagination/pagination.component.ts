import { Component, Input, OnInit } from '@angular/core';
import { GridService } from 'src/app/state-management/grid.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  length: number;
  size: number;
  current: number;

  pageCount: number;
  constructor(private grid: GridService) {
    this.pageCount = -1;
  }

  ngOnInit(): void {

    this.grid.paginationInfo.subscribe(x => {
      this.size = x.size
      this.length = x.rowCount
      this.current = x.current

      this.pageCount = Math.ceil(this.length / this.size);

    })
  }

  changePage(page: number) {

    if (page >= 0 && page < (this.length / this.size))
      this.grid.setCurrentPage(page)
  }

}
