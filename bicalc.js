var string="";
function btnClick(x)
{    
    if(x=='C')
    {
        string="";
        document.getElementById('enter').value=string;
    }
    else if(x=='DEL')
    {
        string=string.slice(0,-1);
        document.getElementById('enter').value=string;
    }
    else if (x=='TD' || x=='TH' || x=='TO')
    {
        if(string.indexOf("+")==-1 && string.indexOf("*")==-1&&string.indexOf("-")==-1&&string.indexOf("/")==-1)
        {
           if(x=='TD')
           {
            const digit = parseInt(string, 2);
            string="";
            document.getElementById('enter').value=digit;
           }
           else if(x=='TH')
           {
            const digit = parseInt(string , 2).toString(16).toUpperCase();
            string="";
            document.getElementById('enter').value=digit;
           }
           else{
            const digit = parseInt(string , 2).toString(8);
            string="";
            document.getElementById('enter').value=digit;

            }
        }
        else
        {
            string="";
            document.getElementById('enter').value=string;
            alert("Enter Valid Number");
        }
    }
    else if(x=='>>' || x=='<<')
    {
        if(string.indexOf("+")==-1 && string.indexOf("*")==-1&&string.indexOf("-")==-1&&string.indexOf("/")==-1)
        {
            if(x=='>>')
            {
                let n=string.length;
                string=string.slice(n-1)+string.slice(0,n-1);
                document.getElementById('enter').value=string;

            }
            else if(x=='<<')
            {
                let n=string.length;
                string=string.slice(1,n)+string.slice(0,1);
                document.getElementById('enter').value=string;

            }

        }

        else{
            string="";
            document.getElementById('enter').value=string;
            alert("Enter Valid Number");
        }
           
    }
    
    else{
    string=string+x;
    document.getElementById('enter').value=string;
    }
}
function result(){
    if (string.indexOf("+") != -1) {
        var num = string.split("+"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        var sum = x + y;
        var ans = sum.toString(2);
    } 
    else if (string.indexOf("-") != -1) {
        var num = string.split("-");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var sub = x - y;
        var ans = sub.toString(2);
    }
     else if (string.indexOf("*") != -1) {
        var num = string.split("*");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var mul = x * y;
        var ans = mul.toString(2);
    } 
    else if (string.indexOf("/") != -1) {
        var num = string.split("/");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var div = x / y;
        var ans = div.toString(2);
    }
    string=ans;
    document.getElementById('enter').value=string;

}
