//print 1-10 using recursion.
let x=1;
function numPrint(){

  if(x<=10)
{
  
  console.log (x );
  x++;
  numPrint();
}
else { 
  console.log ("");
}

}

numPrint();
