const clockContainer = document.querySelector('.region-container__clocks');

const addNewClock = (e,region) => {
  let formatRegion = region.split('/').join('-').toLowerCase();
  e.preventDefault();
  //Create custom elements with classes
  let clockWrapper = createNode('article',[`region-clock`,`--${formatRegion}`]);
  let clockModal = createNode('article',[`clock-modal`,`--${formatRegion}`]);
  let clockFace = createNode('div',[`clock-modal__face`,`--${formatRegion}`]);
  let clockDial = createNode('div',[`clock-modal__dial`,`--${formatRegion}`]);
  let clockSecond = createNode('div',[`clock-modal__hand`, `clock-modal__second`, `--${formatRegion}`]);
  let clockMinute = createNode('div',[`clock-modal__hand`, `clock-modal__minute`, `--${formatRegion}`]);
  let clockHour = createNode('div',[`clock-modal__hand`, `clock-modal__hour`, `--${formatRegion}`]);
  let clockTime = createNode('article',[`clock-modal__time`, `--${formatRegion}`]);
  let clockRegion = createNode('article',[`clock-modal__region`, `--${formatRegion}`]);
  // Build structure
  clockWrapper.append(clockModal,clockTime,clockRegion)
  clockModal.appendChild(clockFace);
  clockFace.append(clockDial,clockSecond,clockMinute,clockHour)
  clockModal.style.background = getRandomImage();
  clockContainer.appendChild(clockWrapper);
  // Initialize Logic
  let logicNodes = {
    hourHand: clockHour,
    minuteHand: clockMinute,
    secondHand: clockSecond,
    digitalTime: clockTime,
    region: clockRegion
  }
  makeClock(logicNodes,region).initializeClock();
}