function sam(num,index,arr)
{
console.log(num);
console.log(index);
console.log(arr);
console.log("---------");
if(num==40)
{
arr[index]=540;
return true;
}
return false;
}

var a=[10,20,30,40,50,60,70,80,90,100];
var y=a.find (sam);
console.log("**********");
console.log(y);
console.log(a);