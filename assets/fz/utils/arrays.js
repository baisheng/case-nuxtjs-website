const shuffle = (array) => {
  let item = 0
  let idx = 0
  for (let i = array.length; --i > 0;) {
    /** @type {number} */
    idx = ~~(Math.random() * (i + 1));
    item = array[idx];
    array[idx] = array[i];
    array[i] = item;
  }
  return array;
}
const clone = (a) => {
  return a.slice(0);
}
const prefill = (column, value) => {
  for (let i = 0; i < value; i++) {
    /** @type {number} */
    column[i] = 0;
  }
  return column;
}

export {shuffle, clone, prefill}
