import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(data: string): string {
    return moment(data).format('Do MMMM YYYY, h:mm:ss a')
  }

}
