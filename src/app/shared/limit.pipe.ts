import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {
    transform(values: any[], limit?: number): any[] {
        if (limit == null) {
            throw new Error('LimitPipe does not have a valid length');
        }

        if (values.length <= limit){
            return values;
        }

        return values.slice(0, limit);
    }
}
