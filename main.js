
// for (let num = 1; num <= 10000000; num++) {
//     result0 += num;
//     domResult.innerText = result0;
// }

const domResult1 = document.querySelector("#result1");
let result1 = 0;
setTimeout(function loop(num = 1, maxNum = 10000000) {
    result1 += num;
    domResult1.innerText = result1;
    if (num < maxNum) {
        setTimeout(loop)
    }
}, 0);

const domResult2 = document.querySelector("#result2");
let result2 = 0;
setZeroTimeout(function loop(num = 1, maxNum = 10000000) {
    result2 += num;
    domResult2.innerText = result2;
    if (num < maxNum) {
        setZeroTimeout(loop)
    }
}, 0);
