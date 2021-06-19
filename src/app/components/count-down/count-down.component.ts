import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {

  @Input() set dDay(date: Date) {
    this._dDay = date;
    this.setTimeUnist();
  }
  get dDay(): Date {
    return this._dDay;
  }
  private _dDay: Date;

  private subscription: Subscription = new Subscription();

  private millisecondsInSecond: number = 1000;
  private secondsInMinute: number = 60;
  private minutesInHour: number = 60;
  private hoursInDay: number = 24;

  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() => {
        this.setTimeUnist();
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setTimeUnist(): void {
    const timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.seconds = Math.floor((timeDiff / this.millisecondsInSecond) % this.secondsInMinute);
    this.minutes = Math.floor((timeDiff / (this.millisecondsInSecond * this.secondsInMinute)) % this.minutesInHour);
    this.hours = Math.floor((timeDiff / (this.millisecondsInSecond * this.secondsInMinute * this.minutesInHour)) % this.hoursInDay);
    this.days = Math.floor((timeDiff / (this.millisecondsInSecond * this.secondsInMinute * this.minutesInHour * this.hoursInDay)));
  }

}
