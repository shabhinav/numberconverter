function convert(){
    var x = document.getElementById("myText").value;
    x=parseInt(x);
    var b= x.toString(2);
    var c = x.toString(8);
    var d = x.toString(16);
    document.getElementById('binary').value=b;
    document.getElementById('octal').value=c;
    document.getElementById('hexa').value=d;
}