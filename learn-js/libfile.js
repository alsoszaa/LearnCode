// variables
var b = 4;
var a = 3;
var sum = b + a;
document.getElementById('p1').innerHTML = sum;
// array
var items = ["first","second","third"]
document.getElementById('p2').innerHTML = items[0];
// if statement
var value = 6;
if(value < 5)
{
    document.getElementById('p3').innerHTML = value;
}
// for loop
var array = ["one","two","three","four"];
var output = "";
for(i = 0; i < array.length; i++)
{
    output += "This is item " + array[i] + "<br />";
}
document.getElementById('p4').innerHTML = output;
// functions (time)
function getTime()
{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    return h + ":" + m;
}
document.getElementById('time').innerHTML = getTime();
// functions (calc)
function addNumbers()
{
    var x = parseInt(document.getElementById('firstNumber').value);
    var y = parseInt(document.getElementById('secondNumber').value);
    var sum1 = x + y;
    document.getElementById('answer').innerHTML = sum1;
}