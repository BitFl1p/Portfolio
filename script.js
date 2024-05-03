// Variable Declaration
var textContent;
var textBox;

const commands = [
`
<cli>
help    -   View command list <br>
clear  -   Clear the console <br>
fetch   -   View my best projects <br>
</cli>
`,

`<fetch id="fetch">
<c4>
┌─<c0>──</c0><c1>────</c1><c2>────</c2><c3>───────</c3><c7>     </c7><c4>───────</c4><c5>────</c5><c6>────</c6><c7>──</c7> <br>
│ <c7>vlad_ciobanu@bitflip</c7> <br>
├─<c0>──</c0><c1>────</c1><c2>────</c2><c3>───────</c3><c7>     </c7><c4>───────</c4><c5>────</c5><c6>────</c6><c7>──</c7> <br>
│ <br>
│ <c1>Main Projects</c1> <c7> These are the projects I want to showcase most</c7> <br>
│ <c6>├></c6> <c2>Subheader</c2> <c7> Desc</c7> <br>
│ <c6>└></c6> <c2>Subheader</c2> <c7> Desc</c7> <br>
│ <br>
├─<c0>──</c0><c1>────</c1><c2>────</c2><c3>───────</c3><c7>     </c7><c4>───────</c4><c5>────</c5><c6>────</c6><c7>──</c7> <br>
│ <br>
│ <c1>Header</c1> <c7> Desc</c7> <br>
│ <c6>├></c6> <c2>Subheader</c2> <c7> Desc</c7> <br>
│ <c6>└></c6> <c2>Subheader</c2> <c7> Desc</c7> <br>
│ <br>
└─<c0>──</c0><c1>────</c1><c2>────</c2><c3>───────</c3><c7>     </c7><c4>───────</c4><c5>────</c5><c6>────</c6><c7>──</c7> <br>
</c4>
</fetch>`]

// Finding Elements once

window.onload = function() {
    textContent = document.getElementById("content");
    textBox = document.getElementById("command");
};

// The Rest
function ClickToAppend() {
    textContent.innerHTML += " hi";
}

function Command(event) {
    if(event.key == 'Enter') {
        switch(textBox.value) {
            case "help": textContent.innerHTML += commands[0]; break;
            case "fetch": textContent.innerHTML += commands[1]; break;
            case "clear": textContent.innerHTML = ""; break;
            default: textContent.innerHTML += '"'+textBox.value+'"'+ " is not a known command <br>"; break;
        }
        textBox.value = "";
    }
}
document.addEventListener("click", function() {
    textBox.select();
})