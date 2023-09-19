let count = 1;
let btnC = 0;
let btnOn = false;
document.getElementById("radio1").checked = true;

function btnF() {
    if (document.getElementById("radio1").checked == true) {
        btnC = 1;
    } else if (document.getElementById("radio2").checked == true) {
        btnC = 2;
    } else if (document.getElementById("radio3").checked == true) {
        btnC = 3;
    } else if (document.getElementById("radio4").checked == true) {
        btnC = 4;
    }
    btnOn = true
}

setInterval( function(){
    nextImage();
}, 5000)


function nextImage() {
    count++;
    if(count > 4) {
        count = 1
    }
    if (btnOn == true) {
        btnOn = false
        count = btnC
    }
    document.getElementById("radio"+count).checked = true;
}
