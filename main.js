var arry=[1,2,3,4,5,6,7,8];
let count=0;
function even(arry)
	{
	for(i=0; i<arry.length; i++)
		{
		if(arry[i]%2==0)
			{
			document.write("even number:"+arry[i]);
			document.write("<br>");
			count++;
			}
		}
		return count;
	}	
	let totalNumber=even(arry);
	document.write(totalNumber);
	