import { Component, OnInit, Input } from '@angular/core';
import { AppModule } from '../../app.module';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rotating-photos',
    templateUrl: './rotating-photos.component.html',
    styleUrls: ['./rotating-photos.component.scss']
})
export class RotatingPhotosComponent implements OnInit {

    private _interval: number = 5000;
    get interval():number {
        return this._interval;
    }
    set interval(newInterval: number) {
        if (newInterval < 1) {
            throw new Error('Interval should be bigger than 0, given: ' + newInterval);
        }
        this._interval = newInterval;
        this.resetInterval();
    }
    
    private _amount: number;
    get amount():number {
        return this._amount;
    }
    @Input('amount') set amount(newAmount: number) {
        if (newAmount < 1) {
            throw new Error('Amount should be bigger than 0, given: ' + newAmount);
        }
        this._amount = newAmount;
    }

    @Input('location') location: string = '';
    current: number;
    @Input('color') public color: string;

    private _handle: number;

    constructor() { }

    ngOnInit() {
        this.current = 1;
        this.resetInterval();
        console.log(this.color);
    }

    private updatePhoto(): void {
        this.current++;
        if (this.current > this.amount)
        {
            this.current = 1;
        }
    }

    private resetInterval(): void {
        if (this._handle)
        {
            window.clearInterval(this._handle);
        }
        this._handle = window.setInterval(() => this.updatePhoto(), this.interval);
    }

    getBackgroundImage(): string {
        return 'url(\'' + this.location + '-' + this.current.toString() + '.jpg\')';
    }
}
