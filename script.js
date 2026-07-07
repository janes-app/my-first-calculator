let currentInput="";
function press(value){
    currentInput+=value;
    document.getElementById("display").innerHTML=currentInput;
}
function calculate(){
    let result=eval(currentInput);
    document.getElementById("display").innerHTML=result;
    currentInput=result;
}
function clearDisplay(){
    currentInput="";
    document.getElementById("display").innerHTML="0";
}