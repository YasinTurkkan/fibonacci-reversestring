

// WITH FUNCTION

function myFibo(num) {

  let last0 = 1;
  let last1 = 1;
  let fibo;

  for (let i = 1; i <= num; i++) {
    fibo = last0 + last1;
    last0 = last1;
    last1 = fibo;
  }
  return fibo;
}


// REVERSE STRING

function reverseString(myStr) {

  let revStr="";
  for (let i = myStr.length-1; i >= 0; i--) {
    revStr += myStr[i];
  }
  return revStr;
}
