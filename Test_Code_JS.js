

  
// alert('in JS')
/*
########################################################################
[  Question -01 ]
Write the function printInt(n) taking one parameter n and print all 
natural numbers from 1 to n in console.

Example  [enter 10]  1 2 3 4 5 6 7 8 9 10
#########################################################################
*/

// function printInt(n) {
// 	// alert('in printInt')
// 	document.write("<br>in printInt<br>");
// 	document.write("<br> n =" + n + '<br>');
// 	var answer = 0;
// 	for(i =1;i <= n; i++)
// 		{
// 		// alert('in for statement');
// 		document.write("<br> i = " + i + "...and...");
// 		var answer = +i;
// 		document.write(" answer = " + answer + "<br>");
// 		// document.getElementById(Question_01).innerHTML = answer
// 		}
// }



// printInt(0)


/*
########################################################################
[  Question -02 ]

write a function [printIntRev] taking one parameter n and print all natural
numbers in reverse from n to 0 in the console

#########################################################################
*/


// function printIntRev(n) 
// 	{
// 		// document.write(n);
// 		var answer = 0;

// 		 for(var i=n; i > 0; i= i-1)                  //  for(var i=n; i > 1; i= i-1)
// 			{
// 				document.write("<br> i = " + i + "...and...");
// 				// console.log(i);
// 				var answer =  i;
// 				document.write(" answer = " + answer + "<br>");
// 				console.log(answer);
// 			}


// 	}



// printIntRev(5)


 // var answer = 1;
 // for(var i=num; i > 1; i= i-1){
 //     answer = answer * i-1;
 // }
 // var i = num;




		// for(var i = n ; i <= 1 ; i= i-1 )
		// 	{
				// document.write(i);
				// document.write(n);
				// document.write('help');
			// alert('in for statement');
			// document.write("<br> i = " + i + "...and...");
			// console.log(i);
			// var answer = n - i;
			// document.write(" answer = " + answer + "<br>");
			// console.log(answer);
			// document.getElementById(Question_01).innerHTML = answer
			// }




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

// function checkInput(x) 
// 	{

// 			if (typeof x === "undefined") {
// 				document.write("-1");
// 			}
// 			else{
// 				document.write(typeof x);
// 			}

// 	}


// checkInput(77)



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

// function simpleEvenAdding(num)
// 	{
// 		var even_num = 0;
// 		var i =0;
// 		var answer = 0;
	
// 		for(i=2; i <= num; i= i+2) 
// 			{
// 				even_num = i+2 ;
// 				answer = i + answer;
// 			} 

// 		document.write('Final answer  = ' + answer);

// 	}


// simpleEvenAdding(5)


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
// */

// function letterCapitalize(str)
// {

//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }

// document.write(letterCapitalize('tell me whats there to do in town'));


/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
*/
/*
########################################################################
[  Question 6 ]

	[_]  Wtire a Function simpleReverse(str)

			[_]  Taking a string and return the string in reverse order

			[EXAMPLEs]
						simpleReverse('hello')  =>  'olleh'
						simpleReverse('I Love Code')  =>  "edoC evoL I"

				[Hint]   Think of how you can loop through a string
				           or array for the charachers backwords to 
				           product a new string.

#########################################################################
// */


function simpleReverse(str)
		{
			
			// varables
			var str_loop = 0;
			var str_count = str.length;

			document.write("<br> str_count =  " + str_count);
			document.write("<br> Origintial String = " + str);
			document.write("<br> str_loop = " + str_loop);
			document.write("<br> -------------------[START]--------------------- " );


			// _________________________________________________

						// document.write("<br>       ========= " );

					
						// THIS SPLITS EVERYTHING AnD COMMA DELIMITED
						var str_split = str.split("");     // split(" "); GIVES INDIVIDUAL WORDS
 						document.write("<br> str_split letter =  " + str_split);
 						var str_split_array = new Array(str_split)
 						// var str_split_array [] = 
 						document.write("<br> str_split_array =  " + str_split_array);

 					// 	document.write("<br> str_split_array =  " + str_split_array[i]);

 					// 	// colors.push('green');


					
						// document.write("<br> i =  " + i);


						document.write("<br>_____________________<br>" );

								var ss = str.split("");
								for (var j in ss) {  
									// document.write("<br/>"); 
								    document.write(ss[j]);  
								    // document.write("<br/>");  
								}  

						document.write("<br>_____________________<br>" );


								//______[ Reverse]________
								var ss = str.split("");
								var sl = str.length;


								for (var j in ss) {  
									// document.write("<br/>"); 
								    document.write(ss[j]);  
								    // document.write("<br/>");  
								}  
						document.write("<br>_____________________<br>" );
								for (i = str.length; i <=0 ;i--)
									{
										document.write(ss[i]); 
										document.write('00'); 
									}
						document.write("<br>_____________________<br>" );
			//__________________________________________________


			document.write("<br> -------------------[END]-------------------- " );




		}  // [....END of FUNCTION....]





simpleReverse('I Love Code')



