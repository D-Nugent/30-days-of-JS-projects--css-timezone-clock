// Initial App Load Logic
const primaryClock = {
  hourHand: document.querySelector('.clock-modal__hour'),
  minuteHand: document.querySelector('.clock-modal__minute'),
  secondHand: document.querySelector('.clock-modal__second'),
  digitalTime: document.querySelector('.clock-modal__time'),
  region: document.querySelector('.clock-modal__region')
}
let localClock = makeClock(primaryClock);
localClock.initializeClock();

const regionDropdown = document.querySelector('.region-modify__dropdown');
const loadRegions = (regions) => {
  regions.forEach(region => {
    let regionOption = document.createElement('option');
    regionOption.value = region;
    regionOption.innerText = region;
    regionOption.classList.add('region-modify__dropdown-option');
    regionDropdown.appendChild(regionOption);
  });
}
loadRegions(regionalTimezones)
// Add clock logic
let currentRegion = regionDropdown.value;
let addClockBtn = document.querySelector('.region-modify__add-clock');
regionDropdown.addEventListener('change',()=>{
  currentRegion = regionDropdown.value;
})
addClockBtn.addEventListener('click',(e) => addNewClock(e,currentRegion));