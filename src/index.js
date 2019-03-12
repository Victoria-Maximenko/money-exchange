// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0){
    	return {};
    }
    if (currency >= 10000){
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    var result = {};
    result.H = Math.floor(currency/50);
    currency=currency%50;
    result.Q = Math.floor(currency/25);
    currency=currency%25;
    result.D = Math.floor(currency/10);
    currency=currency%10;
    result.N = Math.floor(currency/5);
    currency=currency%5;
    result.P = Math.floor(currency/1);

    for(var key in result){
    	if(result[key]===0){
    		delete result[key];
    	}
    }
    return result;
}
