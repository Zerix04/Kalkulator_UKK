let output = document.getElementById("output")

function display(num) {
    output.value += num 
}

function modulus(){
    output.value = eval(output.value += '%');
}

function wipe() {
    output.value ="";
}

function del() {
    output.value = output.value.slice(0, -1);
}

function satuper(){
    output.value = eval(1/ output.value);
}

function kuadrat() {
    output.value = eval(output.value * output.value);
}

function akar() {
    output.value = eval(Math.sqrt(output.value));
}





<input type="text" placeholder="0" id="output" readonly=""></input>
function hitung() {
    output.value = eval(output.value)    
}
<button onclick="display('+')">+</button>