canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent =="mouseDown"){
        
        console.log("last position of x and y coordinates= ");
        console.log("x= "+last_position_of_x+"y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console .log("current position of x and y=")
        console.log("x= "+current_position_of_mouse_x+"y= "+last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}