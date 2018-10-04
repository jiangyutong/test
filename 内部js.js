// JavaScript Document
window.onload=function()
{
	
	var tab_t = document.getElementById("dangand");
    var tab_t_li = tab_t.getElementsByTagName("button");
  	var tab_c = document.getElementById("tablee");
    var tab_c_li = tab_c.getElementsByTagName("div");
    var len = tab_t_li.length;
    var i=0;
    
    for(i=0; i<len; i++)
	{
      tab_t_li[i].index = i;
      tab_t_li[i].onclick = function(){
          for(i=0; i<len; i++)
		  {
              	tab_t_li[i].style.background ='';
                tab_c_li[i].style.display = 'none';
            }
            tab_t_li[this.index].style.background = '#324047';
            tab_c_li[this.index].style.display = 'block';
        }
    }
	
}