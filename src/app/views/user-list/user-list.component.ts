import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from 'src/app/api/placeholder.service';
import { User } from 'src/app/models/user';
import { UserFilterPipe } from 'src/app/views/user-list/pipes/user-filter.pipe';
import { GridService } from './service/grid.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [PlaceholderService, UserFilterPipe]
})
export class UserListComponent implements OnInit {

  filterParams: User = new User();
  data: User[] = [];

  length: number;
  size: number;
  current: number;

  constructor(
    private placeholderService: PlaceholderService,
    private grid: GridService) { }

  ngOnInit(): void {
    this.loadData();
    this.grid.paginationInfo.subscribe(x => {
      this.size = x.size
      this.length = x.rowCount
      this.current = x.current
    })
  }

  loadData() {
    this.placeholderService.getUsers().subscribe(x => { this.data = x; });
  }
}
