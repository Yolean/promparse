# promparse

This is a super primitive Prometheus text format parser,
created as an example of how we can share a lib between Deno and Node.

There are other [Prometheus parsers](https://www.npmjs.com/search?q=prometheus%20parse).

## boilerplate

```bash
npm install --save-dev --save-exact --ignore-scripts jest typescript @tsconfig/deno ts-jest @types/jest
./node_modules/.bin/ts-jest config:init
```

## use from Deno

```javascript
#!/usr/bin/env -S deno run --allow-net
// TODO insert git ref instead of master here
import promparse from 'https://github.com/Yolean/promparse/raw/master/src/promparse.ts';
const scrape = await fetch('http://localhost:8080/metrics');
console.log(promparse(await scrape.text()));
```

## use from Node

```bash
npm install @yolean/promparse
```

(not published yet though)
