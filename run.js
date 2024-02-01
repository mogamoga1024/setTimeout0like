
const MAX_NUM = 100000;

function setTimeoutRun() {
    const domResult = document.querySelector("#setTimeoutResult .result");
    const domProgress = document.querySelector("#setTimeoutResult .progress");
    const domTime = document.querySelector("#setTimeoutResult .time");
    domTime.innerText = "";
    let num = 1;
    let result = 0;
    const startTime = performance.now();
    setTimeout(function loop() {
        result += num;
        domResult.innerText = result;
        domProgress.value = Math.floor((num / MAX_NUM) * 1000) / 10;
        if (num++ < MAX_NUM) {
            setTimeout(loop, 0);
        }
        else {
            domTime.innerText = Math.floor((performance.now() - startTime) * 1000) / 1000 + "ms";
        }
    }, 0);
}

function createRunFunc(func, name = func.name) {
    return function() {
        const domResult = document.querySelector(`#${name}Result .result`);
        const domProgress = document.querySelector(`#${name}Result .progress`);
        const domTime = document.querySelector(`#${name}Result .time`);
        domTime.innerText = "";
        let num = 1;
        let result = 0;
        const startTime = performance.now();
        func(function loop() {
            result += num;
            domResult.innerText = result;
            domProgress.value = Math.floor((num / MAX_NUM) * 1000) / 10;
            if (num++ < MAX_NUM) {
                func(loop);
            }
            else {
                domTime.innerText = Math.floor((performance.now() - startTime) * 1000) / 1000 + "ms";
            }
        });
    };
}

const setZeroTimeoutRun = createRunFunc(setZeroTimeout);
const wait0ScriptRun = createRunFunc(wait0Script, "wait0Script");
const wait0FileReader1Run = createRunFunc(wait0FileReader1, "wait0FileReader1");
const wait0FileReader2Run = createRunFunc(wait0FileReader2, "wait0FileReader2");
const wait0Image1Run = createRunFunc(wait0Image1, "wait0Image1");
const wait0Image2Run = createRunFunc(wait0Image2, "wait0Image2");
const wait0PostMessageRun = createRunFunc(wait0PostMessage, "wait0PostMessage");
const requestAnimationFrameRun = createRunFunc(requestAnimationFrame);

