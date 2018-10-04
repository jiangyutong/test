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

function getLength(str)
{
	return str.replace(/[^\x00-zff]/g,"xx").length;
}
function findStr(str,n)
{
	var tmp=0;
	for(var i=0;i<str.length;i++)
	{
		if(str.charAt(i)==n)
		{
			tmp++;
		}
	}
	return tmp;
}
window.onload=function()
{
	var oFrom=document.getElementById('from1');
	var alnput=oFrom.getElementsByTagName('input');
	var oName=alnput[0];
	var pwd=alnput[1];
	var pwd2=alnput[2];
	var aP=oFrom.getElementsByTagName('p');
	var name_msg=aP[0];
	var pwd_msg=aP[1];
	var pwd2_msg=aP[2];
	var count=document.getElementById('count');
	var aEm=document.getElementsByTagName('em');
	var name_length=0;
	
	

	
//用户名
	oName.onfocus=function()
	{
		name_msg.style.display="block";
		name_msg.innerHTML='<i class="ati"></i>5-25个字符，一个汉字是2个字符，推荐使用中文会员名。'
	}
	oName.onkeyup=function()
	{
		count.style.visibility="visible";
		name_length=getLength(this.value);
		count.innerHTML=name_length+"个字符";
		if(name_length==0)
		{
			count.style.visibility="hidden";
		}
	}
	oName.onblur=function()
	{
		//含有非法字符
		var re=/[^\w\u4e00-\u9fa5]/g;
		if(re.test(this.value))
		{
			name_msg.innerHTML='<i class="err"></i>含有非法字符！';
		}
		
		//不能为空
		else if(this.value=="")
		{
			name_msg.innerHTML='<i class="err"></i>不能为空！';
		}
		
		//长度不能超过25个字符
		else if(name_length>25)
		{
			name_msg.innerHTML='<i class="err"></i>长度不能超过25个字符！';
		}
		
		//长度少于6个字符
		else if(name_length<6)
		{
			name_msg.innerHTML='<i class="err"></i>长度少于6个字符！';
		}
		
		//ok
		else 
		{
			name_msg.innerHTML='<i class="ok"></i>ok!';
		}
	}
//密码
	pwd.onfocus=function()
	{
		pwd_msg.style.display="block";
		pwd_msg.innerHTML='<i class="ati"></i>6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母，数组或符号';
	}
	pwd.onkeyup=function()
	{
		if(this.value.length>5)
		{
			aEm[1].className="active";
			pwd2.removeAttribute("disabled");
			pwd2_msg.style.display="block";
		}
		else 
		{
			aEm[1].className="";
			pwd2.setAttribute("disabled","");
			pwd2_msg.style.display="none";
		}
		if(this.value.length>10)
		{
			aEm[2].className="active";
		}
		else 
		{
			aEm[2].className="";
		}
	}
	pwd.onblur=function()
	{
		var m=findStr(pwd.value,pwd.value[0]);
		var re_n=/[^\d]/g;
		var re_t=/[^a-zA-Z]/g;
		//不能为空
		if(this.value=="")
		{
			pwd_msg.innerHTML='<i class="err"></i>不能为空';
		}
		//不能用相同字符
		else if(m==this.value.length)
		{
			pwd_msg.innerHTML='<i class="err"></i>不能用相同字符';
		}
		else if(this.value.length<6||this.value.length>16)
		{
			pwd_msg.innerHTML='<i class="err"></i>长度应该在6-16个字符';
		}
		//不能全为数字
		else if(!re_n.test(this.value))
		{
			pwd_msg.innerHTML='<i class="err"></i>不能全为数字';
		}
		//不能全为字母
		else if(!re_t.test(this.value))
		{
			pwd_msg.innerHTML='<i class="err"></i>不能全为字母';
		}
		//ok
		else 
		{
			pwd_msg.innerHTML='<i class="ok"></i>OK';
		}
	}
//确认密码
	pwd2.onblur=function()
	{
		if(this.value!=pwd.value)
		{
			pwd2_msg.innerHTML='<i class="err"></i>两次输入不一样';
		}
		
	}
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
	var inputY=document.getElementById('inputy');
	var inputS=document.getElementById('inputs');	
	var shuRu1=document.getElementById('shur1');
	var shuRu2=document.getElementById('shur2');
	
	inputY.onclick=function()
	{
		shuRu1.style.display='block';
		inputY.className='active2';
		inputS.className='';
		shuRu2.style.display='none';
		
	}
	inputS.onclick=function()
	{
		shuRu1.style.display='none';
		inputS.className='active2';
		inputY.className='';
		shuRu2.style.display='block';
	}
	
	var oTxt=document.getElementById('number');
	
	oTxt.onkeydown=function(ev)
	{
		var oEvent=ev||event;
		
		
		if(oEvent.keyCode!=8&&(oEvent.keyCode<48||oEvent.keyCode>57))
		{
			return false; 
		}	
	};
	$(function(){
		// 初始化轮播
		$(".start-slide").click(function(){
			$("#myCarousel").carousel('cycle');
		});
		// 停止轮播
		$(".pause-slide").click(function(){
			$("#myCarousel").carousel('pause');
		});
		// 循环轮播到上一个项目
		$(".prev-slide").click(function(){
			$("#myCarousel").carousel('prev');
		});
		// 循环轮播到下一个项目
		$(".next-slide").click(function(){
			$("#myCarousel").carousel('next');
		});
		
	});
	
	var oGd1=document.getElementById('gd1');
	var oGd3=document.getElementById('gd3');
	var oGd4=document.getElementById('gd4');
	var oParent=document.getElementById('parent');
	
	var disX=0;
	
	oGd1.onmousedown=function(ev)
	{
		var oEvent=ev||event;
		
		disY=oEvent.clientY-oGd1.offsetTop;
	
		document.onmousemove=function(ev)
		{
			var oEvent=ev||event;
			var l=oEvent.clientY-disY;
			
			if(l<0)
			{
				l=0;
			}
			else if(l>oParent.offsetHeight-oGd1.offsetHeight)
			{
				l=oParent.offsetHeight-oGd1.offsetHeight;
			}
			
			oGd1.style.top=l+'px';
			var scale=l/(oParent.offsetHeight-oGd1.offsetHeight);	
			
			oGd4.style.top=-scale*(oGd4.offsetHeight-oGd3.offsetHeight)+'px';
					
			/*oDiv2.style.width=400*scale+'px';
			oDiv2.style.height=400*scale+'px';
			
			oDiv2.style.filter='alpha(opacity:'+scale*100+')';
			oDiv2.style.opacity=scale;*/
		};
		document.onmouseup=function()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	};

	
	
}