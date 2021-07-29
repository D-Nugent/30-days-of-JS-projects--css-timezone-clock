const createNode = (type,classStrArr,valStr) => {
  let element = document.createElement(type);
  classStrArr.forEach(classStr => {
    element.classList.add(classStr);
  });
  if(valStr)element.innerText = valStr;
  return element;
}