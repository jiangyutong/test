// JavaScript Document
function getByClass(oParent,sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	
	
	for(var i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
window.onload=function()
{
	var oDiv=document.getElementById('playimages');
	
	var oUlBig=getByClass(oDiv,'big_pic')[0];
	var aLiBig=oUlBig.getElementsByTagName('li');
	var oP=document.getElementById('p1');
	
	var nowZIndex=2;
	
	var now=0;
	
	for(var i=0;i<aLiBig.length;i++)  
    {
        aLiBig[i].index=i;
        aLiBig[i].onclick=function()  
        {
            if(this.index==now) return; 
            now=this.index;  
            tab();
        };
    };
    
    function tab()
    {
        aLiBig[now].style.zIndex=nowZIndex++;
		p1.style.zIndex=nowZIndex+2;  
        aLiBig[now].style.opacity=0; 
        startMove(aLiBig[now],'opacity',100);  
    };

    
   oUlBig.onclick=function()
    {
        now++;
        if(now==aLiBig.length)
        {
            now=0;
        }
        tab();
    };
	 var timer=setInterval(oUlBig.onclick, 2000);
    
    oDiv.onmouseover=function ()
    {
        clearInterval(timer);
    };
    oDiv.onmouseout=function ()
    {
        timer=setInterval(oUlBig.onclick, 2000);
    };
};
