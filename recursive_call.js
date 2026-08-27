var x;
x = new Array();
x[0]=new Array(3);
x[1]=54;
x[2]=55;
x[3]=("good","bad","ugly");
x[4]=new Array(2);
x[4][0]=[10,20,30];
x[4][1]=["great","india",444,"good"];

function displayContentsOfAnArray(p)
{
console.log("processing starts");
if (Array.isArray(p))
{
var i=0;
while (i<p.length)
{
var j=p[i];
if (Array.isArray(j)) displayContentsOfAnArray(j);
else console.log(j);
i++;
}
}
else {
console.log(p);
     }
}

displayContentsOfAnArray(x);