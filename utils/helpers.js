import {rwn} from "./randomWholeNumber.js"

function ranArr(...arr) {
    if (Array.isArray(arr[0])) arr = arr[0];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
function objects(num, die, table) {
    let n = 0;
    for (let i = 0; i < num; i++) {
      n += rwn(die);
    }
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(table());
    }
  
    return arr;
  }

export { ranArr, objects }