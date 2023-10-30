function changestyle(element, color, backgroundColor, fontsize, padding, textAlign){
    element.style.color = color;

    element.style.backgroundColor = backgroundColor;

    element.style.fontSize = fontsize;

    element.style.padding = padding;

    element.style.textAlign = textAlign;
}

changestyle(document.getElementById("first"), "orange", "yellow", "16px", "5px", "center");

changestyle(document.getElementById("second"), "blue", "lightblue", "14px", "5px", "right");

changestyle(document.getElementById("third"), "red", "pink", "12px", "5px", "left");

document.body.style.fontFamily = "arial";