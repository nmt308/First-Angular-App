import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max',
})
export class MaxPipe implements PipeTransform {
  transform(numbers: number[]): number {
    return Math.max(...numbers);
  }
}
