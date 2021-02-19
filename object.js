//object creation using java script
var person=new Object();
person.name="Janardhana";
person.age=22;
person.designation="S/w Engineer";
person.company="CILA";
document.write("Detail of the object created is : "+"<br></br>"+person.name+"<br></br>"+person.age+"<br></br>"+person.designation+"<br></br>"+person.company+"<br></br>"); //object created
console.log(person);  //in console widow we'll get all the details of the object

//the same object we can write it in function also
//and also we create using {} these two flower braces

//writing object inside the function
function obj(){
  var person={};
  person["name"]="Janardhana";
  person["age"]=22;
  person["designation"]="S/w Engineer";
  person["company"]="CILA";
  return person;
}
z=obj()
alert(z.name+" "+z.age+" "+z.designation+" "+z.company);


//creation of object using "this" keyword
function Person(){
  this.name="Aditya";
  this.age=22;
  this.designation="S/w Engineer";
  this.company="CILA";
}
//here in the funciton if we use "this" keyword then we have to "new" keyword  to create the object from the functions
var man=new Person();
alert("name : "+man.name+"age : "+man.age+"designation : "+man.designation+"company : "+man.company);


//cretion of objectusing displayType method that is addition o mrthod
var animal={
  type:"mammel",
  displayType:function(){
    alert("The type is : "+this.type);
  }
}
var animal1=Object.create(animal);
animal1.displayType();
var fish=Object.create(animal);
fish.type="Fish";
fish.displayType();
