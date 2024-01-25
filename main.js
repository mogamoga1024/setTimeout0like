
const chkSetTimeout = document.querySelector("#chkSetTimeout");
const chkSetZeroTimeout = document.querySelector("#chkSetZeroTimeout");
const chkWait0Script = document.querySelector("#chkWait0Script");
const chkWait0FileReader1 = document.querySelector("#chkWait0FileReader1");
const chkWait0FileReader2 = document.querySelector("#chkWait0FileReader2");

const setTimeoutResult = document.querySelector("#setTimeoutResult");
const setZeroTimeoutResult = document.querySelector("#setZeroTimeoutResult");
const wait0ScriptResult = document.querySelector("#wait0ScriptResult");
const wait0FileReader1Result = document.querySelector("#wait0FileReader1Result");
const wait0FileReader2Result = document.querySelector("#wait0FileReader2Result");

display(setTimeoutResult, false);
display(setZeroTimeoutResult, false);
display(wait0ScriptResult, false);
display(wait0FileReader1Result, false);
display(wait0FileReader2Result, false);

function run() {
    display(setTimeoutResult, chkSetTimeout.checked);
    display(setZeroTimeoutResult, chkSetZeroTimeout.checked);
    display(wait0ScriptResult, chkWait0Script.checked);
    display(wait0FileReader1Result, chkWait0FileReader1.checked);
    display(wait0FileReader2Result, chkWait0FileReader2.checked);

    if (chkSetTimeout.checked) setTimeoutRun();
    if (chkSetZeroTimeout.checked) setZeroTimeoutRun();
    if (chkWait0Script.checked) wait0ScriptRun();
    if (chkWait0FileReader1.checked) wait0FileReader1Run();
    if (chkWait0FileReader2.checked) wait0FileReader2Run();
}

function display(dom, shouldDispaly) {
    if (shouldDispaly) {
        dom.style.display = "";
    }
    else {
        dom.style.display = "none";
    }
}

