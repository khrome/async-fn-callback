const should = require('chai').should();
Δ = require('./index.js');


describe('async-fn-callback', ()=>{
    it('executes correctly', ()=>{
        Δ(async function(){
            let value = await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve('worked')
                }, 10);
            })
            return value;
        }, (err, result)=>{
            should.not.exist(err);
            result.should.equal('worked')
        })
    });

    it('fails correctly', ()=>{
        Δ(async function(){
            let value = await new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    reject(new Error('This is an error!'))
                }, 10);
            })
            return value;
        }, (err, result)=>{
            should.not.exist(result);
            should.exist(err);
            err.message.should.equal('This is an error!')
        })
    });

    it('correctly passes arguments', ()=>{
        Δ(async function(a, b, c){
            should.exist(a);
            a.should.equal('A');
            should.exist(b);
            b.should.equal(1);
            should.exist(c);
            c.should.equal(1.25);
            let value = await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve('worked')
                }, 10);
            })
            return value;
        },'A',1, 1.25, (err, result)=>{
            should.not.exist(err);
            result.should.equal('worked')
        })
    });
})
