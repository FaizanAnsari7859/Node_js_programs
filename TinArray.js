var x=[10,20,30,40,50,60,70,80,90,100]; 
function isEven(n)
{
console.log('doSomething got called with argument :'+n);
return n%2==0;
}
console.log(x.every(isEven));