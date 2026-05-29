/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // 1. Loop shuru hone se pehle ka exact time milliseconds mein save karo
    const startTime = Date.now();

    let sum = 0;
    // 2. 1 se lekar n tak ka loop chala kar saare numbers ko add karo
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // 3. Loop khatam hone ke turant baad ka time milliseconds mein save karo
    const endTime = Date.now();
    
    // 4. (endTime - startTime) se milliseconds milega, use 1000 se divide karke seconds mein return karo
    return (endTime - startTime) / 1000;
}

module.exports = calculateTime;