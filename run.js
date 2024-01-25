
const MAX_NUM = 100000;

function setTimeoutRun() {
    const domResult = document.querySelector("#setTimeoutResult .result");
    const dommProgress = document.querySelector("#setTimeoutResult .progress");
    let num = 1;
    let result = 0;
    setTimeout(function loop() {
        result += num;
        domResult.innerText = result;
        dommProgress.value = Math.floor((num / MAX_NUM) * 1000) / 10;
        if (num++ < MAX_NUM) {
            setTimeout(loop, 0);
        }
    }, 0);
}

function setZeroTimeoutRun() {
    const domResult = document.querySelector("#setZeroTimeoutResult .result");
    const dommProgress = document.querySelector("#setZeroTimeoutResult .progress");
    let num = 1;
    let result = 0;
    setZeroTimeout(function loop() {
        result += num;
        domResult.innerText = result;
        dommProgress.value = Math.floor((num / MAX_NUM) * 1000) / 10;
        if (num++ < MAX_NUM) {
            setZeroTimeout(loop);
        }
    });
}

function wait0ScriptRun() {
    const domResult = document.querySelector("#wait0ScriptResult .result");
    const dommProgress = document.querySelector("#wait0ScriptResult .progress");
    let num = 1;
    let result = 0;
    wait0Script(function loop() {
        result += num;
        domResult.innerText = result;
        dommProgress.value = Math.floor((num / MAX_NUM) * 1000) / 10;
        if (num++ < MAX_NUM) {
            wait0Script(loop);
        }
    });
}

function wait0FileReader1Run() {
    const domResult = document.querySelector("#wait0FileReader1Result .result");
    const dommProgress = document.querySelector("#wait0FileReader1Result .progress");
    let num = 1;
    let result = 0;
    wait0FileReader1(function loop() {
        result += num;
        domResult.innerText = result;
        dommProgress.value = Math.floor((num / MAX_NUM) * 1000) / 10;
        if (num++ < MAX_NUM) {
            wait0FileReader1(loop);
        }
    });
}

function wait0FileReader2Run() {
    const domResult = document.querySelector("#wait0FileReader2Result .result");
    const dommProgress = document.querySelector("#wait0FileReader2Result .progress");
    let num = 1;
    let result = 0;
    wait0FileReader2(function loop() {
        result += num;
        domResult.innerText = result;
        dommProgress.value = Math.floor((num / MAX_NUM) * 1000) / 10;
        if (num++ < MAX_NUM) {
            wait0FileReader2(loop);
        }
    });
}




