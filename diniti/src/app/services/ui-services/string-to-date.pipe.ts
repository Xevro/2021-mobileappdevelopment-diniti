import {Pipe, PipeTransform} from '@angular/core';
import {Time} from '../../models/core-models';

@Pipe({
  name: 'stringtodate'
})
export class StringToDatePipe implements PipeTransform {

  transform(value: Time, ...args: unknown[]): string {
    const date = new Date(value.iso);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() +
      ' ' + date.getHours() + ':' + date.getMinutes();
  }
}
