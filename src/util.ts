let w: any = window
export let schedule
export let unschedule

if (typeof w.requestIdleCallback === 'function') {
  schedule = w.requestIdleCallback.bind(w)
  unschedule = w.cancelIdleCallback.bind(w)
} else if (typeof w.requestAnimationFrame  === 'function') {
  schedule = w.requestAnimationFrame.bind(w)
  unschedule = w.cancelAnimationFrame.bind(w)
} else {
  schedule = function _setTimeout(fn) {
    return setTimeout(fn, 1)
  }
  unschedule = clearTimeout
}
