function validatorForm(){
  var n=document.getElementById('na');
  var p=document.getElementById('ph');
  if (!(isNaN(n.value))){
    alert("Name should be in alphabetd not in number");
  }
  if (isNaN(p.value)){
    alert("Enter the valid phone number");
  }
}
