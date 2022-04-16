var input_area=document.getElementsByTagName("textarea")[0];
var btn_array=document.querySelectorAll(".row .p-1 div");

var operand1=0;
var operand2=null;
var operator=null;
var prev_operator=null;

function isOperator(value){
   return value=="+" || value=="-" || value=="*" || value=="/";
}

for(var i=0; i<btn_array.length; i++)
{
   btn_array[i].addEventListener('click',function(){
      
      var btn_value= this.getAttribute("data-value");
      var text=input_area.value;

      if(isOperator(btn_value))
      {
         operator=btn_value;
         
        if(prev_operator)
        {
            var temp_operand=parseFloat(text);
            var ans= eval(operand1+' '+prev_operator+' '+temp_operand);
            operand1=ans;
            input_area.value="";
        }
        
        else
        {
            operand1=parseFloat(text);
            input_area.value="";
        }
         
         prev_operator=operator;
      }

      else if(btn_value==="AC")
      {
         input_area.value="";
         operand1=0;
         operator=null;
         operand2=null;
      }

      else if(btn_value==="+/-")
      {
        var temp=parseFloat(text);
        temp= -1*temp;
        input_area.value=temp;
      }

      else if(btn_value==="%")
      {
         var temp2=parseFloat(text);
         temp2= temp2/100;
         input_area.value=temp2;
      }

      else if(btn_value===".")
      {
         if(text.length && !text.includes('.'))
         {
            input_area.value= text+'.';
         }
      }

      else if(btn_value==="=")
      {
         operand2=parseFloat(text);
         var result= eval(operand1 + ' ' + operator + ' ' + operand2);

         if(!isNaN(result) && result!==null)
         {
            input_area.value=result;
            operand1=result;
            operand2=null;
            operator=null;
            prev_operator=null;
         }
      }

      else
      {
         input_area.value+= btn_value;
      }

   });
}

