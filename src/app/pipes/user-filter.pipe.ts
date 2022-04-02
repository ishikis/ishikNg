import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';
import { GridService } from '../state-management/grid.service';

@Pipe({
  name: 'userFilter', pure: false
})
export class UserFilterPipe implements PipeTransform {
  constructor(private grid: GridService) { }

  transform(value: User[], seacrhKey: User): User[] {
    let x: User[] = (seacrhKey.name || seacrhKey.username || seacrhKey.email || seacrhKey.phone) ?
      value
        .filter((v: User) => !seacrhKey.name || v.name.toLowerCase().indexOf(seacrhKey.name.toLocaleLowerCase()) !== -1)
        .filter((v: User) => !seacrhKey.username || v.username.toLowerCase().indexOf(seacrhKey.username.toLocaleLowerCase()) !== -1)
        .filter((v: User) => !seacrhKey.email || v.email.toLowerCase().indexOf(seacrhKey.email.toLocaleLowerCase()) !== -1)
        .filter((v: User) => !seacrhKey.phone || v.phone.toLowerCase().indexOf(seacrhKey.phone.toLocaleLowerCase()) !== -1)
      : value;

    this.grid.setRowCount(x && x.length > 0 ? x.length : 1);

    return x;
  }

}
