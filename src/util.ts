let w: any = window
export let schedule
export let unschedule

if (typeof w.requestIdleCallback === 'function') {
  schedule = w.requestIdleCallback
  unschedule = w.cancelIdleCallback
} else if (typeof w.requestAnimationFrame  === 'function') {
  schedule = w.requestAnimationFrame
  unschedule = w.cancelAnimationFrame
} else {
  schedule = function _setTimeout(fn) {
    return setTimeout(fn, 1)
  }
  unschedule = clearTimeout
}


