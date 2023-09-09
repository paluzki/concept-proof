function moveLight(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("light").style.top = y + "px";
    document.getElementById("light").style.left = x + "px";
}