var weigth=0,taken=0,age_value,t1,t2,t3,t4,t5,t6,t7,t8,count_value,count_value,ageF_value;
function getdata()
{
    {
        let age=document.getElementById("age");
        var age_value=age.value;
    }
    {
        let d=document.getElementsByName("test1");
        let i;
        var t1;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
                taken=Number(d[i].value);
            }
        }        
    }
    if(taken==1)
    {
    {
        let d=document.getElementsByName("test9");
        let i;
        var t9;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
    
                weigth=weigth+Number(d[i].value);
            }
        }        
    }
    {
        let d=document.getElementsByName("test10");
        let i;
        var t10;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
                weigth=weigth+Number(d[i].value);
            }
        }        
    }
    /*{
        let count=document.getElementById("count");
        var count_value=count.value;
    }
    {
        let motality=document.getElementById("motality");
        var motality_value=motality.value;
    }*/
    {
        let ageF=document.getElementById("ageF");
        var ageF_value=ageF.value;
    }
    {
        let d=document.getElementsByName("test2");
        let i;
        var t2;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
             
                weigth=weigth+Number(d[i].value);
            }
        }        
    }
    {
        let d=document.getElementsByName("test3");
        let i;
        var t3;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
                 
                weigth=weigth+Number(d[i].value);
            }
        }        
    }{
        let d=document.getElementsByName("test4");
        let i;
        var t4;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
                weigth=weigth+Number(d[i].value);
            }
        }        
    }
    {
        let d=document.getElementsByName("test5");
        let i;
        var t5;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
                 weigth=weigth+Number(d[i].value);
            }
        }        
    }
    {
        let d=document.getElementsByName("test6");
        let i;
        var t6;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
                weigth=weigth+Number(d[i].value);
            }
        }        
    }
    {
        let d=document.getElementsByName("test7");
        let i;
        var t7;
        for(i=0;i<d.length;i++)
        {
            if(d[i].checked)
            {
                weigth=weigth+Number(d[i].value);
            }
        }        
    } /*
    document.write(age_value+"<br>");
    document.write(t1+"<br>"); 
    //document.write(count_value+"<br>");
    //document.write(motality_value+"<br>");
    document.write(ageF_value+"<br>");
    document.write(t2+"<br>"); 
    document.write(t3+"<br>"); 
    document.write(t4+"<br>"); 
    document.write(t5+"<br>"); 
    document.write(t6+"<br>"); 
    document.write(t7+"<br>");
    document.write(t9+"<br>"); 
    document.write(t10+"<br>"); 
    document.write(weigth+"<br>"); */
    if(weigth >= 65)
    window.open("page1.html",'_self');
    else
    window.open("noeligible.html",'_self');
}
else
window.open("recom.html",'_self');
}
  
