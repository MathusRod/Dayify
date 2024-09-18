import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTransform'
})
export class DataTransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
