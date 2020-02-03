import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(text:string, args: number): any {
    let maxlength = args || 0;
    let length = text.length;
    return (maxlength - length);
  }

}
