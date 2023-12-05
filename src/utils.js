export function setMultipleAttributes(element, attrs) {
    for(let key in attrs) {
      element.setAttribute(key, attrs[key]);
    }
  }