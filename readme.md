# Idley

Helper functions for implementing the idle-until-urgent pattern. For detailed explanation of this pattern, see [this](https://philipwalton.com/articles/idle-until-urgent/) article from [Philip Walton](https://github.com/philipwalton).

## Installation

```
// with yarn
yarn add idley

// with npm
npm install idley
```

## Usage

```ts
// ES2015+ and TS
import { computed, throttled, debounced } from 'idley'

// CommonJS
var idley = require('idley')
```

## Functions

### Computed

`computed(fn: function): function`

Creates a function that returns the result of executing the passed `fn` when the browser is idle. If the result is requested and it has not been computed yet, the function will be executed immediately.

```ts
const { computed } from 'idely'

const heavyTask = () => 5

const foo = computed(heavyTask)

console.log(foo()) // 5
```

### Throttled

`throttled(fn: function): function`

Creates a throttled function that only invokes the passed `fn` at most once when the browser is idle.

```ts
const { throttled } from 'idely'

const heavyTask = (n) => console.log(n)

const foo = throttled(heavyTask)

foo(1)
foo(2)

// 2
```

### Debounced

`debounced(fn: function): function`

Creates a debounced function that delays invoking the passed `fn` until the browser is idle.


```ts
const { debounced } from 'idely'

const heavyTask = (n) => console.log(n)

const foo = debounced(heavyTask)

foo(1)
foo(2)

// 1
// 2
```

_This library relies on requestIdleCallback. It will degrade to requestAnimationFrame, or setTimeout in this order_

Published under MIT Licence

(c) Yosbel Marin 2018