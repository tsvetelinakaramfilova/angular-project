import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToHoursMin'
})
export class MinToHoursMinPipe implements PipeTransform {

  transform(min: number): string {
    if (isNaN(min) || min < 0) {
      return 'Invalid input';
    }

    const hours = Math.floor(min / 60);
    const remainingMinutes = min % 60;

    if (hours === 0) {
      return `${remainingMinutes} min`;
    } else if (remainingMinutes === 0) {
      return `${hours} h`;
    } else {
      return `${hours} h ${remainingMinutes} min`;
    }
  }
}