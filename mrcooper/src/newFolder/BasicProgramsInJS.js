import React from 'react'

const BasicProgramsInJS = () => {
  //Check Prime number //Prime number means number should be divisible by 1 and given number but not more than 2 factors.
  //num > 2 and remainder should not br 0. 
  function primeNumber (num) {
    if(num < 2) return false;
    for(let i=2; i<Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
  }

  console.log(primeNumber(5));

  //Check prime numbers between given number
  var primes = [];
  function primenumberscount (n) {
    //loop given number from 2 to given number
    //check one by one number is prime or not. if prime push into array, if not skip to add.
    for(let i =2; i <= n; i++) {
      if(primeNumber(i)) {
         primes.push(i);
      }
    }
  }
  primenumberscount(30);
  console.log(`prime numbers of 30 are ${primes}`);

  //Amstrong number
  function amstrongNumber (num) {
    //find digit using num % 10
    //find sum using sum + digit **3
    //find next temp(backward num of given number) using temp / 10
    // loop this process
    var sum = 0;
    var temp = num;
    while (temp > 0) {
        var digit = temp % 10;
         sum = sum + digit **3;
        temp = Math.floor(temp/10);
    }
    return num === sum;
  }
  console.log(amstrongNumber(153));
  

  //Check Palindrome Number
  function Palindrome(number) {
    reversed = 0; 
    //find the digit using temp % 10
    //find reversed using reversed = reversed * 10 + digit 
    //find next temp (backward num of given number) using temp / 10
    var temp = number;
    var reversed = 0;
    while(temp > 0) {
        var digit = temp % 10;
        reversed = reversed * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    return number === reversed;
  }

  console.log("Palindrome is..."+Palindrome(121));

//   //Recursion
//   function Recursion(num) {
//     let result = 1;
//     for (let i = 1; i < num; i++) {
//         result = result * i; 
//     }
//     return result;
//   }
//   console.log(`factorial is ...`, Recursion(5));
  
  //Factorial using recursion
  function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n-1);
  }
  console.log(factorial(5));

  //Swap Two Numbers (Without Temp Variable)
  let a = 10;
  let b = 20;
  [a,b] = [b,a];
  console.log(a,b);

  //Find the largest number
  function findTopLargest (arr, rank) {
    let unique = [...new Set(arr)];
    unique.sort((a,b) => b - a);
    console.log(unique);
    
    return unique[rank - 1];    
  }
  const arr = [1,2,2,3,4,5,6,7,8,99,1];
  console.log(findTopLargest(arr, 1));
  
  //Reverse the given number
  function reverseNumber (num) {
    //set temp = num
    //loop through it
    //find all values reversed by reversed * 10 (temp / 10)
    //find next temp value by temp = Math.floor(temp /10)
    let temp = num;
    let reversed = 0;
    while(temp > 0) {
        reversed = reversed * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return reversed;
  }
  
  console.log(reverseNumber(1234));

  //Check it is perfect number or not
  // number should be divisible and sum those divisible numbers
  function perfectNumber (num) {
       let sum = 0;
       for(let i= 0; i < num; i++) {
            if(num % i == 0) {
                sum = sum + i;
            }
            return sum === num;
       }
  }
  console.log(perfectNumber(28));
  
  //Flatten array without .flat
  function flattenArr (arr) {
     //set empty array
     //check it i array or not if array use recursive method, if not push it to result array
     let result = [];
     for(let item of arr) {
        if(Array.isArray(item)) {
           result = result.concat(flattenArr(item));
        }
        else {
            result.push(item);
        }
     }
     return result;
  }
  const array1 = [1,2,[3,4], [5, [6, 7,[8,[9]]]]];
  console.log(flattenArr(array1));



  //Checks Prime number or not 
  function primeNum (num) {
    //num > 2
    //num % i === 0 
    if(num < 2) return false;
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
  }
  console.log("Prime number", primeNum(5));
  
  //Check prime numbers between given number
  var prime = [];
  function primeNums (num) {
    //loop the number from 0 to given number 
    //Check is it prime or not
    for(let i = 2; i < num; i++) {
        if(primeNum(i)) {
            prime.push(i);
        }
    }
    return prime;
  }
  console.log("Prime numbers", primeNums(42));

   //Amstrong number or not
   //find digit using temp % 10
   //find sum using sum + digit ** 3
   //find next temp using Math.Floor(temp / 10)

   function amstrongNum (num) {
     let sum = 0;
     let temp = num;
     while(temp > 0) {
        var digit = temp % 10;
        sum = sum + digit ** 3;
        temp = Math.floor(temp / 10);
     } 
     return sum === num;
   }

   console.log(amstrongNum(153));
   
  
  function PalindromeFn (num) {
     //digit using temp % 10
     //reversed using reversed * 10 + digit
     //next temp
     let reversed = 0;
     let temp = num;
     while(temp > 0) {
        var digit = temp % 10;
        reversed = reversed * 10 + digit;
        temp = Math.floor(temp/10);
     }
     return num === reversed;
  }

  console.log(PalindromeFn(121));

  //Reverse the number without using reverse method
  //find digit using temp % 10
  //find reversed value using reversed * 10 + digit;
  //find next temp using temp /10
  function reversedfn (num) {
    let reversed = 0;
    let temp = num;
    while(temp > 0) {
        var digit = temp % 10;
        reversed = reversed * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    return reversed;
  }

  console.log(reversedfn(1234));
  
  //Factorial using recusrion method
  function factorial(num) {
     if(num === 1 || num === 0) return 1;
     return num * factorial(num - 1);
  }

  console.log(factorial(17));
  
  //Swap between two numbers
  let a1 = [10];
  let b1 = [20];
  [a1,b1] = [b1,a1];
  console.log(a,b);

  //Find the largest number
  function largestnum (arr, rank) {
    let unique = [...new Set(arr)];
    unique.sort((a,b) =>  b - a);
    return unique[rank - 1]
  }

  const array2 = [10,20,30,40,50,40,90,80];
  console.log(largestnum(array2, 1));

  //Perfect numbers
  function perfectNumberfn (num) {
     let sum = 0;
     for(let i = 0 ; i<num; i++) {
       if(num % i === 0) {
         sum = sum + i;
       }
     }
     return sum === 28;
  }

  console.log(perfectNumberfn(28));


  //Flatten array without using reverse method
  //empty array to store item
  //loop array(for of loop) check array or not, if yes use recurvie method, if not use push into result-array
  //finally return result
  function flatten() {
    let result = [];
    for(let item of arr) {
        if(Array.isArray(item)) {
            result = result.concat(flatten(item));
        }
        else {
            result.push(item);
        }
    }
    return result;
  }
  
  const arraycommon = [1,2,[3,4], [5, [6, 7,[8,[9]]]]];
  console.log(flatten(arraycommon));

  
  

  
  return (
    <div>BasicProgramsInJS</div>
  )
}

export default BasicProgramsInJS