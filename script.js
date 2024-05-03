document.title = "hi";
let content = document.getElementById("content");

function ClickToAppend() {
    content.append("hi");
    console.log(content.textContent);
}