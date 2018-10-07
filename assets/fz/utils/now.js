export default (() => {
  const perf = window && window.performance;
  return perf && perf.now ? perf.now.bind(perf) : () => (new Date).getTime()
})()
