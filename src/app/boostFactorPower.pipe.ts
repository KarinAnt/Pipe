import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'boostFactor',
    pure: true //false
})

export class BoostFactorPowerPipe implements PipeTransform{
    transform(power: number, factor: number): number{
        return power ** factor;
    }
}