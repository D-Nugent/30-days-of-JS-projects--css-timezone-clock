const makeClock = (clockNodes,timezone) => {
  return({
    _currentTime: new Date(),
    _timezone: timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    _rotations:{
      seconds:0,
      minutes:0,
      hours:0
    },
    _degrees: {
      seconds: 0,
      minutes: 0,
      hours: 0
    },
    _clockNodes: clockNodes,
    get currentTime(){
      return timezone? this.convertTimezone(this._currentTime,timezone):this._currentTime;;
    },
    get timeDivided(){
      const [seconds,minutes,hours] = [this._currentTime.getSeconds(),this._currentTime.getMinutes(),this._currentTime.getHours()];
      return {
        seconds,
        minutes,
        hours
      }
    },
    get rotations(){
      return this._rotations;
    },
    get degrees(){
      return this._degrees;
    },
    convertTimezone(time,timezoneStr){
      const newTime = new Date(time).toLocaleString('en-US', {timeZone: timezoneStr})
      return new Date(newTime)
    },
    updateRotations(hand){
      this.rotations[hand] += 1;
    },
    calcDegrees(hand) {
      const divider = hand==='hours'?12:60;
      const time = this.timeDivided[hand];
      return ((time/divider)*360+90) + this._rotations[hand] * 360;
    },
    updateDegrees(){
      this._degrees.seconds = this.calcDegrees('seconds');
      this._degrees.minutes = this.calcDegrees('minutes');
      this._degrees.hours = this.calcDegrees('hours');
    },
    updateTime(){
      this._currentTime = timezone? this.convertTimezone(new Date(),timezone):new Date();
    },
    updateInterface(){
      const {secondHand,minuteHand,hourHand,digitalTime} = this._clockNodes;
      const {seconds,minutes,hours} = this._degrees
      secondHand.style.transform = `rotate(${seconds}deg)`;
      minuteHand.style.transform = `rotate(${minutes}deg)`;
      hourHand.style.transform = `rotate(${hours}deg)`;
      digitalTime.innerText = this._currentTime.toLocaleTimeString();
    },
    initializeClock(){
      this._clockNodes.region.innerText = this._timezone;
      setInterval(async () => {
        this.updateTime();
        const {seconds,minutes,hours} = this.timeDivided;
        seconds === 0 && this.updateRotations('seconds');
        minutes === 0 && this.updateRotations('minutes');
        (hours === 12 || hours===0) && this.updateRotations('hours');
        this.updateDegrees();
        this.updateInterface();
      }, 1000);
    }
  })
}