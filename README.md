# array-n
Create multidimensional arrays in javascript

## Installation

```bash
npm install array-n
```

## Usage

```ts
import { array } from "array-n"

array([10], (x) => x) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array([2, 2], () => 0) // [[0, 0], [0, 0]]
```
