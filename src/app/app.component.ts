import { Component } from '@angular/core';
import { interval, Observable, pipe, timer } from 'rxjs';
import { skip, skipUntil, skipWhile, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 0
  isActive: boolean = false
  timeOut: boolean = true
  //doubleClick: boolean = true
  seconds: any
  start: number = 0
  snclicksCount: number = 0

  setInterval() {
    if (!this.isActive ) {
      let seconds = timer(0, 1000)
      .subscribe(sec => {
        return this.value = sec
      })
      this.isActive = true
      this.timeOut = false
      return this.seconds = seconds
    }
  }

  startTimer() {
    this.setInterval()
  }

  stopTimer() {
    this.seconds.unsubscribe()
    this.isActive = false
    this.timeOut = true
    return (this.value = 0, this.start = 0)
  }

  toggle(val){
    this.snclicksCount += 1
    if (this.snclicksCount === 1) this.frizeTimer(val)
  }

  frizeTimer(value) {
    setTimeout(() => {
      this.timeOut = true
      if (this.snclicksCount > 1) {
        this.waitTimer(value)
        this.snclicksCount = 0
      } else {
        this.value = value + this.start
        this.isActive = true
        this.start = 0
        this.seconds.unsubscribe()
      }
    }, 300)
  }

  waitTimer(value) {
    this.seconds.unsubscribe()
    this.start += value
    this.start = Math.ceil(this.start)
    this.value = 0
    this.isActive = false
  }

  resetTimer() {
    this.seconds.unsubscribe()
    this.isActive = false
    this.start = 0
    this.value = 0
    this.snclicksCount = 0
    this.startTimer()
  }
}
