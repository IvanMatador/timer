import { HhmmssPipe } from './hhmmss.pipe';
import { Component } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HhmmssPipe ]
})
export class AppComponent {

  title = 'timer'

  value: number = 0
  isWait: boolean = false
  timeOut: boolean = true
  seconds: any
  startValue: number = 0
  isStarted: boolean = false
  clicksCount: number = 0

  startStopTimer() {
    if (this.isStarted) {
      this.stopTimer()
    } else {
      this.startTimer()
    }
  }

  startTimer() {
    if (!this.isStarted ) {
      let seconds = timer(0, 1000)
      .subscribe(sec => {
        return this.value = sec
      })
      this.isStarted = true
      this.timeOut = false
      return this.seconds = seconds
    }
  }

  stopTimer() {
    this.seconds.unsubscribe()
    this.isStarted = false
    this.timeOut = true
    return (this.value = 0, this.startValue = 0)
  }

  toggle(val){
    this.clicksCount += 1
    if (this.clicksCount === 1) this.frizeTimer(val)
  }

  frizeTimer(value) {
    setTimeout(() => {
      this.timeOut = true
      if (this.clicksCount > 1) {
        this.waitTimer(value)
        this.clicksCount = 0
      } else {
        this.stopTimer()
      }
    }, 300)
  }

  waitTimer(value) {
    this.seconds.unsubscribe()
    this.startValue += value
    this.value = 0
    this.isStarted = false
  }

  resetTimer() {
    this.seconds.unsubscribe()
    this.isStarted = false
    this.startValue = 0
    this.value = 0
    this.clicksCount = 0
    this.startTimer()
  }
}
