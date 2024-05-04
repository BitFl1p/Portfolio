// Variable Declaration
var textContent;
var textBox;

const commands = [
`
<cli>
<hr>  Command List  <hr><br>
<tab>
<c1>help</c1>       <c2>View command list.</c2> <br><br>
<c1>clear</c1>     <c2>Clear the console.</c2> <br><br>
<br>
<c1>fetch-projects --main</c1>      <c2>View a list of my favourite past projects and current ongoing ones.</c2> <br><br>
<c1>fetch-projects --misc</c1>      <c2>View a list of all other projects I have made and haven't included in the previous command (this command isn't complete)</c2> <br>
</tab><br><br>
<hr>
</cli>
`,

`<fetch id="fetch">
<c4>
    ┌─<c0>──</c0><c1>────</c1><c2>────</c2><c3>───────</c3><c7>     </c7><c4>───────</c4><c5>────</c5><c6>────</c6><c7>──</c7> <br>
    │ <c7>vlad_ciobanu@bitflip</c7> <br>
    ├─<c0>──</c0><c1>────</c1><c2>────</c2><c3>───────</c3><c7>     </c7><c4>───────</c4><c5>────</c5><c6>────</c6><c7>──</c7> <br>
    │ <br>
    │ <c1> Ongoing Projects </c1> <br> 
    │ <c6>│</c6> <c7> This is what I'm currently working on</c7> <br>
    │ <c6>│</c6> <br>
    │ <c6>├></c6><c2> You'll find out soon enough :)</c2> <br>
    │ <c6>│</c6> <c7> </c7> <br>
    │ <c6></c6> <br>
    │ <br>
    │ <c1> Main Projects </c1> <br> 
    │ <c6>│</c6> <c7> These are my favourite</c7> <br>
    │ <c6>│</c6> <c7> past projects</c7> <br>
    │ <c6>│</c6> <br>
    │ <c6>├></c6><c2> DIY Duelist</c2> <br>
    │ <c6>│</c6> <c7> This was my final project for college.</c7> <br>
    │ <c6>│</c6> <c7> I got to show off a whole buncha stuff.</c7> <br>
    │ <c6>│</c6> <c7> Though it's pretty broken as it stands</c7> <br>
    │ <c6>│</c6> <br> <iframe class="embed" frameborder="0" src="https://itch.io/embed/1541924?linkback=true&amp;bg_color=282828&amp;fg_color=ebdbb2&amp;link_color=d3869b&amp;border_color=776859" width="505" height="167"><a href="https://bitfl1p.itch.io/diy-duelist">DIY Duelist by BitFlip</a></iframe>│ <c6>│</c6> <br>│ <c6>│</c6> <br>│ <c6>│</c6> <br>│ <c6>│</c6> <br>│ <c6>│</c6> <br>│ <c6>│</c6> <br>│ <c6>│</c6> <br>│ <c6>│</c6> <br>│ <c6>│</c6> <br>
    │ <c6>├></c6><c2> Origins of Heresy Mod</c2><br>
    │ <c6>│</c6> <c7> A small mod I made to add my favourite character </c7> <br>
    │ <c6>│</c6> <c7> from Risk of Rain 2 into Risk of Rain 2013. </c7> <br>
    │ <c6>│</c6> <br>
    │ <c6>│</c6> <c7> Check it out <a href="https://rainfusion.net/mod/2a7a6008-fee0-4b4c-b224-87146b4f38e9">here</a></c7><br>
    │ <c6>│</c6> <br>
    │ <c6></c6> <br>
    └─<c0>──</c0><c1>────</c1><c2>────</c2><c3>───────</c3><c7>     </c7><c4>───────</c4><c5>────</c5><c6>────</c6><c7>──</c7><br>
</c4>
</fetch>`,

`this command is incomplete`,

`<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script>
<script type='text/javascript'>kofiwidget2.init('Buy me a coffee', '#83a598', 'D1D5XIJZS');kofiwidget2.draw();</script>`

];

var commandHistory = [];
var historyPos = 0;
// Finding Elements once

window.onload = function() {
    textContent = document.getElementById("content");
    textBox = document.getElementById("command");
}

// The Rest
function ClickToAppend() {
    textContent.innerHTML += " hi";
}

function Command(event) {
    switch(event.key) {
        case "Enter": {
            if(textBox.value == "clear") textContent.innerHTML = "";
            else { 
                textContent.innerHTML += (()=>{switch (textBox.value) {
                    case "help": return commands[0];
                    case "fetch-projects --main": return commands[1];
                    case "fetch-projects --misc": return commands[2];
                    case "": return  "Please type a command. <br> Type 'help' for a list of commands";
                    default: return '"' + textBox.value + '"'+ " is not a known command. <br> Type 'help' for a list of commands";
                }})();
                textContent.innerHTML += "<br><br>";
            }
            commandHistory.push(textBox.value);
            textBox.value = "";
            historyPos = 0;
            window.scrollTo(0, document.body.scrollHeight);
            break;
        }
        case "ArrowUp": {
            if(historyPos >= commandHistory.length || historyPos < 0){
                historyPos = historyPos >= commandHistory.length ? commandHistory.length-1 : 0;
                break;
            }

            textBox.value = commandHistory[commandHistory.length - 1 - historyPos];
            historyPos++;
            break;
        }
        case "ArrowDown": {
            if(historyPos >= commandHistory.length || historyPos < 0){
                historyPos = historyPos >= commandHistory.length ? commandHistory.length-1 : 0;
                break;
            }

            textBox.value = commandHistory[commandHistory.length - 1 - historyPos];
            historyPos--;
            break;
        }
    }
}

document.addEventListener("click", function() {
    textBox.select();
})