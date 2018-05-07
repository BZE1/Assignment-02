


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
	var answer = 0;
		for(i =1;i <= n; i++)
				{
				var answer = +i;
				 console.log(" answer = " + answer  );
				}
	}



printInt(42);

/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
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
			if (typeof x === "number" || typeof x ===  "string"|| typeof x ===  "boolean") {
				return (typeof x);
			}
			else{
				var result = '-1';
				return result
			}
	}

console.log(checkInput(true));



/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
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
				answer = i + answer;
			}
		return answer;
	}


// simpleEvenAdding(num)
console.log(simpleEvenAdding(10));






/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
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

 return str.replace(/\w\S*/g, function(txt)
 		{
 			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
 		});
}

// document.write(letterCapitalize('tell me whats there to do in town'));


/*
		/\w\S/g
		/  				regular expression
		\w   			looks for word chr in the string
		\S 	with star   any chr that is not a whitespace
		\g  			selects each instance


*/

document.write(letterCapitalize('ok here we go on a trip'));

/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
[  Question 6 ]

	[_]  Wtire a Function simpleReverse(str)

			[_]  Taking a string and return the string in reverse order

			[EXAMPLEs]
						simpleReverse('hello')  =>  'olleh'
						simpleReverse('I Love Code')  =>  "edoC evoL I"

				[Hint]   Think of how you can loop through a string
				           or array for the charachers backwords to 
				           product a new string.

######################################################################### */


function simpleReverse(str)
		{
			
			// varables
			var str_loop = 0;
			var str_count = str.length;
			var result_arr = [];
			var result = "";

				 for ( var m = str_count -1; m >=0 ; m = m -1)  // m = 
					{  
								result_arr.push(str[m]);
 					} 

 			var result = result_arr.join("");
 			return result;
	}


console.log(simpleReverse(' its time for MSIMBO'));


/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
[  Question 7 ]

	[_]  Write a function findDiff(arr)

		[_]  taking an array of numbers as parameter and return
		 the difference between the max number and the min number
		 	(max - min)

		 EXAMPLEs ;

		 		findDiff( [1,2,4,6,20,31] )  => 19 (because 20-1 =19)

		 		findDiff([24,22,23,22,24])  => 2  (because 24-22 = 2)

		 		findDiff([1,1,1,1,1])   => 0

		 		findDiff([1])  => 0

		 		findDiff([])   => 0
				
######################################################################### */


function findDiff(arr) 
	{
		var m_max = 0;
		var m_min = 0;
		var m_diff = 0;

		var m_max = Math.max.apply(null, arr);
		var m_min = Math.min.apply(null, arr);
		var m_diff = m_max - m_min;

		return m_diff
		//_________________________________________________

	}

console.log(findDiff([25,27]));


/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
[  Question 8 ]

	[_]  Write a function timeConvert(num)

		[_]  taking a number as a paramenter and retur the number of hours and minutes the parameter converts to.

		[_]  Seperate the number of hours and minutes with a colon.

		EXAMPLE :

			timeConvert(01)   =>  1:1
			timeConvert(63)   =>  1:3
			timeConvert(120)  =>  2:0
			timeConvert(59)   =>  0:59

			HINTs :  dividing and modulo the number 60
				
######################################################################### */


	function timeConvert (num){
					
					var result_l = parseInt(num / 60);
					var result_r = num % 60;
					var result = result_l + " : " + result_r;
					return result;
				}



console.log(timeConvert(63));


/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
[  Question 9 ]

	[_]  Write a function findStr(str, long)

		[_]  taking 2 strings as parameters
		[_]  RETURN how many str you can fins in long string.

		[_]  Assuming that str is not empty !

		EXAMPLE:
				findStr('hi', 'dasdhidasdasfehisdkskhi')  => 3
				findStr('o','daodo' )   => 2
				findStr("ha" , "abcode")  => 0

				
######################################################################### */


function findStr(str, long) 
	{
		var tgt = str.toLowerCase();
		var found = 0;
		var str = "";
		var crap = long.toLowerCase();
		var crap_found = 0;
		var counter = 0

			if (long.includes(str))

					{
						for(var i = 0 ; i <= crap.length ; i++)
							{
								get_crap = crap.indexOf(tgt) ;

									if (long.includes(str))
										{
											var counter = counter+1		
											var crap = crap.slice(get_crap +1);
											i = get_crap -i;
										}
									else{
										return
									}
							}
					}
		else{
			return;
		}

	document.write("<br>  Counter  = " + counter);
	console.log("<br>  Counter  = " + counter);

	}


// findStr("str", "long");
findStr("ok", "ok here we go ok get er ok done ok"); 
// findStr("", "");



/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
[  Question 10 ]

	[_]  Write a function selfDividingNumbers(left, right)

		[_]  taking two(2) numbers bound as parameters
		[_]  RETURN an array[] of every possible self dividinG number
		          between them

		[_]  INCLUDE bounds

		EXAMPLE:
				128 is a self dividing number because ;
						128 % 1 == 0
						128 % 2 == 0
						128 % 8 == 0

				( 1 , 22 )  =>  [1,2,3,4,5,6,7,8,9,11,12,15,22]

				( 1 , 10 )  =>  [1,2,3,4,5,6,7,8,9]

				( 12 , 21 ) =>  [12,15]

			HINT  ;  a self-dividing number is a number that is divided b
			      y every digit it containes.
				
				
######################################################################### */



      // ================================================
      // 			SUB FUNCTION TO DO THE MATH
      // ================================================


 function selfDiv(t_arr)
      {

        var parc_arr  = t_arr.toString();
        var arr_str = parc_arr.split("");
        var div_Numbers = [];
        
        
        		// LOOPS THROUGH EACH DIGET
             for (var m = 0 ; m < arr_str.length ; m++)
                      {
                        var divCheck = t_arr % arr_str[m];

                        // CHECKS ID ITS = 0
							if (divCheck == 0)
	                             {
	                                 var parc_flag = true;  
	                             }
	                        else
	                             {
	                                 var parc_flag = false;
	                                  return
	                             }
                        var divResult = parc_flag;
                         
                        }

        div_Numbers.push(t_arr);
        
	       // 		document.write('<br>' +div_Numbers  );
	     		// console.log(div_Numbers );
        
        return parc_flag;

      }

      // =================================================
      // MAIN FUNCTION TO LOOP THROUGH THE NUMBERS GIVIN
      // =================================================
function selfDividingNumbers(left, right)
           {
           	var div_rtn = [];
            var i_arr = [];
            var i_arr_s = [];
            var rtn_arr = [];

            document.write('Numbers entered are    LEFT:' + left + '  RIGHT:' + right);
            document.write('<br>');
            console.log('Numbers entered are    LEFT:' + left + '  RIGHT:' + right);
            document.write('Self Deviding Numbers are  ');
            console.log('Self Deviding Numbers are  ');

            		// LOOPS STARTS AT # LEFT  -TO- THE RIGHT #
                       for(var i = left ; i <= right ; i++)
                           {
                               var i_arr = i;  
                               // CALL THE SUB FUNCTION
                               if(selfDiv(i_arr)){
                               	rtn_arr.push(i_arr);
                               }
                               // rtn_arr.push(div_Numbers);
                               // debug(rtn_arr);

                           }

                return rtn_arr
           }


// selfDividingNumbers( left, right);
console.log(selfDividingNumbers( 10,100));
// selfDividingNumbers( 10, 20);


/*
#########################################################################
#########################################################################
#########################################################################
#########################################################################
[  Question Extra Credit ]

	[_]  Write a function moveZeros(nums)

		[_]  taking an array[] of numbers
		[_]  MOVE all 0 (zeros) to the end of it
		[_]  While maintaining the relative order of the non-zero elements.

	EXAMPLE : 

		moveZeros([0,1,3,12])    			=>  [1,3,12,0,0,]
		moveZeros([1,2,0,0,2,312,33,00])    =>  [1,2,312,33]
		moveZeros([0,0,0]) 					=>  [0,0,0,]
		moveZeros([1,2,312,11,2])			=>  [1,2,312,11,2]
				
				
######################################################################### */


function moveZeros(nums) 
		{

		// [ VARABLES ]__________________________
			var pop = 0;
			var arr_p = 0;
			var zero_count = 0;
		// _____________________________________

			console.log('Orginal Array = ' +  nums);

			for (var i = 0 ; i < nums.length ; i++)
				{

					// FOR LOOP TO CHECK FOR ZEROS
						if (nums[i] == 0)
							{
								// COUNTS ALL THE ZEROS
								pop = pop + 1;
								// REMOVES ALL THE ZEROS FROM THE ARRAY
								nums[i] = "";
								// COUNTS ALL THE ZEROS THAT WERE REMOVED
								zero_count = zero_count + 1;
							}

				}
			
				// FOR LOOP TO PUSH THE ZEROS TO THE END
				for (j = zero_count; j > 0 ; j--)
					{
					// PUSHES ZEROS TO THE END OF THE ARRAY
						nums.push(0);
						
					}

				// FILTERS OUT ALL THE EMPTY SPACES OF THE ARRAY
			nums_new = nums.filter(checkNum);

			console.log('NEW Array  = ' +  nums_new);

			
		}

			// check number
function checkNum(value) {
				return typeof value == 'number';
			}



moveZeros([5,8,0,78,6,8,4,0,0,7,8,0,5,3,0,6,5,,]) ;
// moveZeros([0,1,3,12]) ;