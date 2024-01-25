
// for (let num = 1; num <= 10000000; num++) {
//     result0 += num;
//     domResult.innerText = result0;
// }

const MAX_NUM = 10000000;

// (function() {
//     const domResult = document.querySelector("#result1");
//     const dommProgress = document.querySelector("#progress1");
//     let num = 1;
//     let result = 0;
//     setTimeout(function loop() {
//         result += num;
//         domResult.innerText = result;
//         dommProgress.innerText = Math.floor((num / MAX_NUM) * 1000) / 10 + "%";
//         if (num++ < MAX_NUM) {
//             setTimeout(loop, 0);
//         }
//     }, 0);
// })();

// (function() {
//     const domResult = document.querySelector("#result2");
//     const dommProgress = document.querySelector("#progress2");
//     let num = 1;
//     let result = 0;
//     setZeroTimeout(function loop() {
//         result += num;
//         domResult.innerText = result;
//         dommProgress.innerText = Math.floor((num / MAX_NUM) * 1000) / 10 + "%";
//         if (num++ < MAX_NUM) {
//             setZeroTimeout(loop);
//         }
//     });
// })();

// (function() {
//     const domResult = document.querySelector("#result3");
//     const dommProgress = document.querySelector("#progress3");
//     let num = 1;
//     let result = 0;
//     wait0Script(function loop() {
//         result += num;
//         domResult.innerText = result;
//         dommProgress.innerText = Math.floor((num / MAX_NUM) * 1000) / 10 + "%";
//         if (num++ < MAX_NUM) {
//             wait0Script(loop);
//         }
//     });
// })();

(function() {
    const domResult = document.querySelector("#result4");
    const dommProgress = document.querySelector("#progress4");
    let num = 1;
    let result = 0;
    debugger;
    wait0FileReader1(function loop() {
        result += num;
        domResult.innerText = result;
        dommProgress.innerText = Math.floor((num / MAX_NUM) * 1000) / 10 + "%";
        if (num++ < MAX_NUM) {
            wait0FileReader1(loop);
        }
    });
})();

(function() {
    const domResult = document.querySelector("#result5");
    const dommProgress = document.querySelector("#progress5");
    let num = 1;
    let result = 0;
    wait0FileReader2(function loop() {
        result += num;
        domResult.innerText = result;
        dommProgress.innerText = Math.floor((num / MAX_NUM) * 1000) / 10 + "%";
        if (num++ < MAX_NUM) {
            wait0FileReader2(loop);
        }
    });
})();

(function() {

})();

(function() {

})();


