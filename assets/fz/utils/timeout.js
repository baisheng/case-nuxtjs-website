/* eslint-disable prefer-reflect,no-return-assign,no-extra-parens */
import now from "./now";


const timeout = (fn, delay) => {
  const lp = function () {
    now() - start >= delay ? fn.call() : data.id = requestAnimationFrame(lp)
  }

  const start = now();
  const data = {};
  return (data.id = requestAnimationFrame(lp), data)
}
timeout.clear = function (data) {
  data && cancelAnimationFrame(data.id)
}

export default timeout

