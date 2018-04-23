


 // #################################################
 // ########[        Assignment-02          ]########
 // #################################################
  



/*
########################################################################
[  Question -01 ]
Write the function printInt(n) taking one parameter n and print all 
natural numbers from 1 to n in console.

Example  [enter 10]  1 2 3 4 5 6 7 8 9 10
#########################################################################
*/

function printInt(n) 
	{
	// alert('in printInt')
	document.write("<br>in printInt<br>");
	document.write("<br> n =" + n + '<br>');
	var answer = 0;
		for(i =1;i <= n; i++)
				{
				// alert('in for statement');
				document.write("<br> i = " + i + "...and...");
				var answer = +i;
				document.write(" answer = " + answer + "<br>");
				// document.getElementById(Question_01).innerHTML = answer
				}
	}



printInt(0)

/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
*/



/*
########################################################################
[  Question -02 ]

write a function [printIntRev] taking one parameter n and print all natural
numbers in reverse from n to 0 in the console

#########################################################################
*/


function printIntRev(n) 
	{
		// document.write(n);
		var answer = 0;

		 for(var i=n; i > 0; i= i-1)                  //  for(var i=n; i > 1; i= i-1)
			{
				document.write("<br> i = " + i + "...and...");
				// console.log(i);
				var answer =  i;
				document.write(" answer = " + answer + "<br>");
				console.log(answer);
			}


	}



printIntRev(5)

/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
*/


/*
########################################################################
[  Question -03 ]

Write the function [checkInput(x)]  
    [_]  taking one parameter x and return the string
         [_]  'number'     if x is a number;  
         [_]   return the string 'string'  if x is a string; 
         [_]   return boolean if x is a boolean, 
         [_]   otherwise return -1.

 example;
        checkInput 950 => 'number'
        checkInput('hello') => 'string'
        checkInput(true)=> boolean
        checkInput{none} => -1

#########################################################################
*/

function checkInput(x) 
	{

			if (typeof x === "undefined") {
				document.write("-1");
			}
			else{
				document.write(typeof x);
			}

	}


checkInput('test')



/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
*/
/*
########################################################################
[  Question -04 ]

Write a function simpleEvenAdding(num)
	[_]  Taking a number and adding up all the EVEN numbers from 1 to num.

	[Examples]
		simpleEvenAdding(5)   => 6   ( because 2+4=6)
		simpleEvenAdding(10)  => 30  ( because 2+4+6+8+10 = 30)
		simpleEvenAdding(11)  => 6   ( because 2+4+6+8+10 = 30)
		simpleEvenAdding(1)   => 0 
		simpleEvenAdding(0)   => 0 

#########################################################################
*/


function simpleEvenAdding(num)
	{
		var even_num = 0;
		var i =0;
		var answer = 0;
		
		for(i=2; i <= num; i= i+2) 
			{
				even_num = i+2 ;
				// console.log(i);
				answer = i + answer;
			}


				document.write('Final answer  = ' + answer);

	}


simpleEvenAdding(num)



/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
*/

/*
########################################################################
[  Question -05 ]

Write a function letterCapitalize()

	[_]  taking in a string
	[_]  capotailize the first letter of each word.
	[_]  The givin word will be seperated by a space.

	[EXAMPLEs]
			lettercapitalize("hello world")  = "Hello World"
			lettercapitalize("you cannot find the answer online")
				=  "You Cannot Find The Answer Online"

#########################################################################
*/

function letterCapitalize(str)
{

 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

document.write(letterCapitalize('tell me whats there to do in town'));





