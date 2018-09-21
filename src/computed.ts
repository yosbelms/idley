import { schedule, unschedule } from './util'

export function computed(computeFn) {
  return (function (computeFn) {
    let hasBeenComputed = false
    let value
    const scheduled = schedule(compute)

    function compute() {
      value = computeFn()
      hasBeenComputed = true
    }

    return function _computed() {
      if (!hasBeenComputed) {
        unschedule(scheduled)
        compute()
      }
      return value
    }

  })(computeFn)
}