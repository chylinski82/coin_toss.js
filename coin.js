let portfolio = 1000;


toss = (tries, size=1) => {
    let n = 0;
    let heads = 0;
    let tails = 0;

    //console.log(`your starting portfolio is: ${portfolio} $oy pounds and your betting ${size * 100}% of your portfolio each time`);

    while (n < tries) {
        let coin = Math.floor(Math.random() * 2);
        if (coin === 0) {
            tails = tails + 1;
            if (size === 1) {
                portfolio = portfolio * 0.6
            } else {
                portfolio = portfolio - portfolio * size * 0.4
            }               
        } else {
            heads = heads + 1;
            if (size === 1) {
                portfolio = portfolio * 1.5
            } else {
                portfolio = portfolio + portfolio * size * 0.5
            }
        }           
        n++
    }
    //console.log(`after ${tries} tries you got ${heads} heads and ${tails} tails. 
    //Your current portfolio is: ${portfolio.toFixed(4)} $oy pounds`);
    return portfolio 
}

//toss(100, 0.1)

multiple_games = (games) => {
    
    let g = 0; //number of games
    let w = 0; //number of wins
    let l = 0; //number of losses
    let e = 0; //number of break evens
    while (g < games) {
        toss(100, 0.25);
        if(portfolio > 1000) {
            w = w + 1
        } else if(portfolio < 1000) {
            l = l + 1
        } else {
            e = e + 1
        }
        g++;
        portfolio = 1000; //need to reset portfolio to starting value.
    }
    console.log(`of ${games} games, you won ${w} times, you lost ${l} times and ${e} times you ended breaking even`)
}

multiple_games(10000)




