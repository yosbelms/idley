import { schedule, unschedule } from './util'

const debouncedTasks = []
let scheduledExcuteDebouncedTasks

export function debounced(debouncedFn) {
  return function _debounced(...args) {
    debouncedTasks.push(createTask(debouncedFn, args))
    if (scheduledExcuteDebouncedTasks) {
      unschedule(scheduledExcuteDebouncedTasks)
      scheduledExcuteDebouncedTasks = void 0
    }
    scheduledExcuteDebouncedTasks = schedule(executeDebouncedTasks)
  }
}

function executeDebouncedTasks() {
  while (debouncedTasks.length) {
    const task = debouncedTasks.shift()
    task.fn(...task.args)
  }
}

function createTask(fn, args) {
  return { fn, args }
}