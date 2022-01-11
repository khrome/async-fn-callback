module.exports = function(){
    let args = Array.prototype.slice.call(arguments);
    let fn = args.shift();
    let cb = args.pop();
    if(typeof fn !== 'function') throw new Error('First argument must be a function');
    if(typeof cb !== 'function') throw new Error('Last argument must be a function');
    fn.apply(fn, args).then((result)=>{
        cb(null, result)
    }).catch((ex)=>{
        cb(ex);
    });
}
