//named function
function add(a,b){
  document.write('This is inside the named funciton'+'----');
  return a+b;
}
document.write("The addition of two numbers is : "+add(5,20)+"<br></br>");

//annonymus function
var a=function(a,b){
  document.write('This is inside the annonymusfunction'+'----');
  return (a+b);
}
var c=a("CILA","LABS");
document.write(" My first joining company is : " +c+"<br></br>");

//constructor
var cons=new Function("a","b","document.write('This is inside the constructor'+'----'); return a+b;");
var z=cons(10,20);
document.write("The sum in the constructor is : "+z+"<br></br>");

//self-invoking functions
(function(a){
  document.write("This is inside the self-invoking function"+"-----");
  document.write("The square of a number : "+a*a+"<br></br>");
}(9));
