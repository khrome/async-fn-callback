async-fn-callback
=================

I maintain a number of callback oriented libraries(even if they might offer promise interfaces at a high level), due to their much better stack handling properties. While pure promises don't offer much over callbacks, the `async`/`await` *does* offer some complexity benefits (especially if a library already uses promises heavily, meaning you already have a disconnected call stack).

This library gives you the ability to interface with these using the traditional callback idiom(so that you can handle errors and success in the same scope). It's barely any code and only exists so you(I) can avoid boilerplate.

Usage
-----

```js
const Δ = require('async-fn-callback')

Δ(async function(){
    // use await as much as you want
    // then return something
}, (err, result)=>{
    //promises underneath, but idiomatic to callbacks
});
```

Testing
-------
Just use:
```bash
./node_modules/mocha/bin/mocha
```
