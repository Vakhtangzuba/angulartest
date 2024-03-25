import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo',
  standalone: true,
})
export class YesNoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? 'კი' : 'არა';
  }
}
