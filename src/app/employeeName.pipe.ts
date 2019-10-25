import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'employeeName'
})

export class EmployeeNamePipe implements PipeTransform{
    transform(value:string, gender:string): string {
        return (gender === 'Male')? 'Mr.' + value:'Mrs.' + value;
    }
}