function sam(k)
{
 if(k==10) return;
   sam (k+1);
   console.log(k);
}
sam(1)