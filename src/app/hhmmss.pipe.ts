import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hhmmss'
})
export class HhmmssPipe implements PipeTransform {

  transform(value: number): Date {
    value = value * 1000 - 10800000
    let toDate = new Date(value)
    return toDate;
  }
}
