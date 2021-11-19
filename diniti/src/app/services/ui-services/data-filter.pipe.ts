import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'datafilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(data: any[], filterValue: string): any[] {
    if (filterValue) {
      if (data[0].name) {
        return data.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()));
      } else if (data[0].firstname && data[0].lastname && data[0].userEmail) {
        return data.filter(item => item.firstname.toLowerCase().includes(filterValue.toLowerCase()) ||
          item.lastname.toLowerCase().includes(filterValue.toLowerCase()) ||
          item.userEmail.toLowerCase().includes(filterValue.toLowerCase()));
      }
    } else {
      return data;
    }
  }
}
