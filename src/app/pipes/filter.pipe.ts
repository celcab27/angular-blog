import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: any): any {

    if(!arg) return value;
    return value.filter(user => user.title.includes(arg));
  }
}
