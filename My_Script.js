function op1()
{
 window.open("Love_cal.html");
}
function op2()
{
    window.open("Find_luck.html");
}
function op3()
{
    window.open("Name_matcher.html");
}
function op4()
{
    window.open("Birth_Gift_card.html");
}


/* Email Send */

function Send_mess()
{
  event.preventDefault();
  var eml = document.querySelector('#T_area').value;
  var mess= document.querySelector('#Mess_area').value;


  if(eml.length <7)
  {
    alert('Fill details');
    return
  }
  else if(mess.length <5)
  {
    alert('Aleast 10 Words');
    return
  }
  else
  {
   alert('Message Send');
   return
  }
}

/* Love Calculator */


function getNum(name)
{  var result=0;
for(var i=0; i<name.length; i++ )
{
     result += parseInt( name.charCodeAt(i));
}
return result;
}
function calc()
{   event.preventDefault();
    
    var name1 =document.querySelector("#oneIn").value;
    var name2= document.querySelector("#twoIn").value;
    
    

   if(name1.length <1 )
   {
       alert('Please Fill Your Name ');
       return
   }
   else if(name2.length <1 )
   {
       alert('Please Fill Your Partner Name ');
       return
   }
   else {
          
        

         document.getElementById('heart').style.visibility="visible";
         document.getElementById('ht').style.visibility="visible";
         document.getElementById('animate').style.visibility="visible";
         

         results = parseInt(getNum(name1) * getNum(name2));
          score=  parseFloat(results%100);

          res = "<h1> Love " +score + "% </h1>";


          document.getElementById("Result").innerHTML=res;
          myMove(score);
        }

}

    
function myMove(score) {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == score+10) {
        clearInterval(id);
      } else {
        pos++; 
         
        elem.style.height = pos + "px"; 
      }
    }return
  }

  /* Make Bday Gift Card  */

  function Bday()
  { event.preventDefault();
    let yr =new Date().getFullYear(); 
    var na = document.querySelector("#bname").value;
    var year =document.querySelector("#sel").value;

    if(na.length <1)
    {
     alert("please Enter name");
     return
    }
    else if(na.length <3)
    {
      alert("Please Enter Correct or Full name ");
      return
    }

    document.getElementById('Bday1').style.visibility="hidden";
    document.getElementById('Bday1').style.height="0px";
    document.getElementById('Bday1').style.width="0px";

    yr = yr-year;
    var end ="";
    if(yr==1)
    {
      end="st";
    }
    else if(yr==2)
    {
      end="nd";
    }
    else if(yr==3)
    {
      end="rd";
    }
    else
    {
      end="th";
    }
    document.getElementById('bt1').style.visibility="visible";
    
    document.getElementById('Bday2').style.visibility="visible";
    document.getElementById("wish").innerHTML="Happy Birthday " +na;
    document.getElementById("year").innerHTML= yr +end;
    

  }
  function close()
  { 
    
    document.getElementById('bt').style.visibility="visible";
    document.getElementById('Bday2').style.visibility="hidden";
    document.getElementById('Bday1').style.visibility="visible";

  }
  

  /* Find Luck  */

  function luck()
  {
    event.preventDefault();
    
    var nam = document.querySelector('#inn').value;
    if(nam.length <1)
    {
     alert("please Enter name");
     return
    }
    else if(nam.length <3)
    {
      alert("Please Enter Correct or Full name ");
      return
    }
    var rashi = document.getElementById('selct').selectedIndex;
    var rest = "";
    document.getElementById('main-content').style.visibility="hidden";
    document.getElementById('Luck').style.visibility="visible";
    document.getElementById('Luck2').style.visibility="visible";
    document.getElementById('bck').style.visibility="visible";
     

   switch(rashi)
   {
      case 0:
           rest="You Are most talented person. You're soft hearted . ";
           break;   
      case 1:
        rest="You're Believer in God . Your time is good now.";
        break;
      case 2:
        rest="You're Most handsome person anyone can't cheat with You becoz You're Very smart . ";
        break;
      case 3:
        rest="You're Very attractive person . But Nobody understands you ,you seems you're alone . ";
        break;
      case 4:
        rest="You're Famaous person .Your partner will meet you soon .";
        break;
      case 5:
        rest="You're Great person . Somebody wants to cheat with you stay alert .";
        break;
      case 6:
        rest ="You're going to wrong direction please think about it carefully.";
        break;

      case 7:
        rest="You're Cute person . You will have too money soon .";
        break;
      case 8:
        rest="You're Awesome personality . You will hear good news soon...";
        break;

      case 9:
        rest="You're Mysterious person . You Will meet your childhood friend soon....";
        break;

      case 10:
        rest="You're Nice Person . Someone meets you ...";
        break;

   }



    document.getElementById('lck1').innerHTML="<br>"+rest;
    document.getElementById('lck2').innerHTML="<br><br>"+nam;
    

  }

  function bck()
  {
    document.getElementById('main-content').style.visibility="visible";
    document.getElementById('Luck').style.visibility="hidden";
    document.getElementById('Luck2').style.visibility="hidden";
    document.getElementById('bck').style.visibility="hidden";

  }

  
  /*  Name Matcher  */
  function nameMathcer()
  {
     event.preventDefault();
    
    var name1 =document.querySelector("#oneIn").value;
    var name2= document.querySelector("#twoIn").value;
    
    

   if(name1.length <1 )
   {
       alert('Please Fill Your Name ');
       return
   }
   else if(name2.length <1 )
   {
       alert('Please Fill Your Partner Name ');
       return
   }
   else {
          
        

         document.getElementById('heart').style.visibility="visible";
         document.getElementById('ht').style.visibility="visible";
         document.getElementById('animate').style.visibility="visible";
         

         results = parseInt(getNum(name1) * getNum(name2));
          score=  parseFloat(results%100);

          res = "<h1>  " +score + "% </h1>";


          document.getElementById("Result").innerHTML=res;
          myMove(score);
        }

}
  
