
toss = (tries) => {
    let portfolio = 1000;
    let heads = 0;
    let tails = 0;
    let n = 0;
    console.log(`your starting portfolio is: ${portfolio} $oy pounds`);
    while (n < tries) {
        let coin = Math.floor(Math.random() * 2);
        if(coin === 0) {
            tails = tails + 1;
            portfolio = portfolio * 0.6;
        } else {
            heads = heads + 1;
            portfolio = portfolio * 1.5;
        }
        n++
    }
    console.log(`after ${tries} tries you got ${heads} heads and ${tails} tails. 
Your current portfolio is: ${portfolio.toFixed(4)} $oy pounds`);   
}

toss(100)





