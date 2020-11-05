/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 

Expected Result:
PasswordValidationResult=  [false, false, true, false, false]
*/
const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]
let previousPasswords = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729.", "384#HsHf" , "Jai33"];





function validatePasswords(arr) {
  let boolResult = [];
  let check = [];

  let alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let symbols = ["!", "#", "$", "%", ".", "*", "&"];

  // Check length at least 5
  for(let i=0; i < arr.length; i++) {
    if(arr[i].length >= 5) {
      boolResult.push(true);
    } else {
      boolResult.push(false);
    }
  }

  // Check contains English upper and lower case
  for(let i=0; i< arr.length; i++) {
    let bool = false;
    for(let j=0; j< alphaUpper.length; j++) {
      if(arr[i].includes(alphaUpper[j]) || arr[i].includes(alphaLower[j])) {
        bool = true;
      }
    }
    
    check.push(bool);
  }

  // Compare 2 array
  for(let i=0; i< boolResult.length; i++) {
    for(let j=0; j< check.length; j++) {
      if(boolResult[i] === false){
        check[i] = false;
      }
    }
  }

  boolResult = check;
  check = [];

  // Check it contains numbers
  for(let i=0; i< arr.length; i++) {
    let bool = false;
    for(let j=0; j< num.length; j++) {
      if(arr[i].includes(num[j])) {
        bool = true;
      }
    }
    
    check.push(bool);
  }

  // Compare 2 array
  for(let i=0; i< boolResult.length; i++) {
    for(let j=0; j< check.length; j++) {
      if(boolResult[i] === false){
        check[i] = false;
      }
    }
  }

  boolResult = check;
  check = [];

  // Check it contains symbol
  for(let i=0; i< arr.length; i++) {
    let bool = false;
    for(let j=0; j< symbols.length; j++) {
      if(arr[i].includes(symbols[j])) {
        bool = true;
      }
    }
    
    check.push(bool);
  }

  // Compare 2 array
  for(let i=0; i< boolResult.length; i++) {
    for(let j=0; j< check.length; j++) {
      if(boolResult[i] === false){
        check[i] = false;
      }
    }
  }

  boolResult = check;
  check = [];

  // It must NO contain previous password
  for(let i=0; i< arr.length; i++) {
    let bool = true;
    for(let j=0; j< previousPasswords.length; j++) {
      if(arr[i] === previousPasswords[j]) {
        bool = false;
        break;
      }
    }
    
    check.push(bool);
  }

  // Compare 2 array
  for(let i=0; i< boolResult.length; i++) {
    for(let j=0; j< check.length; j++) {
      if(boolResult[i] === false){
        check[i] = false;
      }
    }
  }

  // console.log(check);
  return boolResult;
}















/* ======= TESTS - DO NOT MODIFY THIS PART===== */
function test(test_name, actual, expected) {
    let status;
    for (i=0; i<actual.length; i++){
      if (actual[i] === expected[i]) {
        status = "PASSED";
      } else {
        status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
      }
    }
    console.log(`${test_name}: ${status}`);
}

test("validatePasswords function works - case 1",
  validatePasswords(passwords1), [false, false, true, false, false]);

test("validatePasswords function works - case 2",
  validatePasswords(passwords2), [true, true, false, false, true]);
/* ======= TESTS - DO NOT MODIFY THIS PART===== */