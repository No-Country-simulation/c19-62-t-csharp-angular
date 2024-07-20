import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appUserAcronym',
  standalone: true,
})
export class UserAcronymPipe implements PipeTransform {
  transform(name: string): string {
    return name
      .split(' ')
      .reduce((prev, curr) => prev + curr.charAt(0).toUpperCase(), '');
  }
}
