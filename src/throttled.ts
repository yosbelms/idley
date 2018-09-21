import { schedule, unschedule } from './util'

export function throttled(throttledFn) {
  return (function throttledClosure(throttledFn) {
    let scheduled
    return function _throttled(...args) {
      if (scheduled) {
        unschedule(scheduled)
        scheduled = void 0
      }
      scheduled = schedule(() => throttledFn(...args))
    }
  })(throttledFn)
}