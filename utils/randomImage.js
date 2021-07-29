const getRandomImage = () => {
  let randomDigit = () => (Math.floor(Math.random()*8)+1);
  let imageNum = [];
  while (imageNum.length<3) {
    imageNum.push(randomDigit());
  }
  return `url(https://unsplash.it/300?image=${imageNum.join('')})`
}