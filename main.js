var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="cyan";
widthofline=15;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{mouseEvent="mouseDown";
console.log("mouseDown");
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{mouseEvent="mouseUp";
console.log("mouseUp");
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{mouseEvent="mouseLeave";
console.log("mouseLeave");
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
console.log("mouseMove")
if(mouseEvent=="mouseDown"){
    console.log("mouseDown mouseMove")
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
   ctx.arc(currentpositionofx,currentpositionofy,30,0,2*Math.PI)
    ctx.stroke();
}

}

