// Answer of Question Number 1
function question1() {
  var q1Num = Number(window.prompt('Please Enter Any Number'));
  document.getElementById('q1').innerHTML = q1Num;
  console.log(q1Num);
}
// --------------------------------------------------------------------------------

// Answer of Question Number 2
function question2() {
  var q2Num = Number(window.prompt('Please Enter Any Number'));
  if (q2Num % 3 == 0 && q2Num % 4 == 0) {
    document.getElementById('q2').innerHTML = 'Yes';
    console.log('Yes');
  }
  else {
    document.getElementById('q2').innerHTML = 'No';
    console.log('No');
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 3
function question3() {
  var q3Num1 = Number(window.prompt('Please Enter The First Number'));
  var q3Num2 = Number(window.prompt('Please Enter The Second Number'));
  if (q3Num1 > q3Num2) {
    document.getElementById('q3').innerHTML = q3Num1;
    console.log(q3Num1);
  }
  else {
    document.getElementById('q3').innerHTML = q3Num2;
    console.log(q3Num2);
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 4
function question4() {
  var q4Num = Number(window.prompt('Please Enter Any Number'));
  if (q4Num > 0) {
    document.getElementById('q4').innerHTML = 'Positive';
    console.log('Positive');
  }
  else if (q4Num < 0) {
    document.getElementById('q4').innerHTML = 'Negative';
    console.log('Negative');
  }
  else if (q4Num == 0) {
    document.getElementById('q4').innerHTML = 'Zero';
    console.log('Zero');
  }
  else {
    document.getElementById('q4').innerHTML = 'Please Enter a Number';
    console.log('Please Enter a Number');
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 5
function question5() {
  var q5Num1 = Number(window.prompt('Please Enter The First Number'));
  var q5Num2 = Number(window.prompt('Please Enter The Second Number'));
  var q5Num3 = Number(window.prompt('Please Enter The Third Number'));
  if (q5Num1 > q5Num2 && q5Num1 > q5Num3) {
    document.getElementById('q51').innerHTML = q5Num1;
    console.log(q5Num1);
  }
  else if (q5Num2 > q5Num1 && q5Num2 > q5Num3) {
    document.getElementById('q51').innerHTML = q5Num2;
    console.log(q5Num2);
  }
  else {
    document.getElementById('q51').innerHTML = q5Num3;
    console.log(q5Num3);
  }
  if (q5Num1 < q5Num2 && q5Num1 < q5Num3) {
    document.getElementById('q52').innerHTML = q5Num1;
    console.log(q5Num1);
  }
  else if (q5Num2 < q5Num1 && q5Num2 < q5Num3) {
    document.getElementById('q52').innerHTML = q5Num2;
    console.log(q5Num2);
  }
  else {
    document.getElementById('q52').innerHTML = q5Num3;
    console.log(q5Num3);
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 6
function question6() {
  var q6Num = Number(window.prompt('Please Enter Any Number'));
  if (q6Num % 2 == 0) {
    document.getElementById('q6').innerHTML = 'Even';
    console.log('Even');
  }
  else {
    document.getElementById('q6').innerHTML = 'Odd';
    console.log('Odd');
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 7
function question7() {
  var q7char = window.prompt('Please Enter Any Character');
  if (q7char == 'a' || q7char == 'e' || q7char == 'i' || q7char == 'o' || q7char == 'u') {
    document.getElementById('q7').innerHTML = 'Vowel';
    console.log('Vowel');
  }
  else {
    document.getElementById('q7').innerHTML = 'Consonant';
    console.log('Consonant');
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 8
function question8() {
  var q8Num = Number(window.prompt('Please Enter Any Number'));
  var q8Result = '';
  for (var i = 1; i <= q8Num; i++) {
    q8Result += i + ' ';
  }
  document.getElementById('q8').innerHTML = q8Result;
  console.log(q8Result);
}
// --------------------------------------------------------------------------------

// Answer of Question Number 9
function question9() {
  var q9Num = Number(window.prompt('Please Enter Any Number'));
  var q9Result = '';
  for (var i = 1; i <= 12; i++) {
    q9Result += q9Num * i + ' '
  }
  document.getElementById('q9').innerHTML = q9Result;
  console.log(q9Result);
}
// --------------------------------------------------------------------------------

// Answer of Question Number 10
function question10() {
  var q10Num = Number(window.prompt('Please Enter Any Number'));
  var q10Result = '';
  for (var i = 2; i <= q10Num; i += 2) {
    q10Result += i + ' ';
  }
  document.getElementById('q10').innerHTML = q10Result;
  console.log(q10Result);
}
// --------------------------------------------------------------------------------

// Answer of Question Number 11
function question11() {
  var q11Num1 = Number(window.prompt('Please Enter The Base Number'));
  var q11Num2 = Number(window.prompt('Please Enter The Power Number'));
  function getPower(q11Num1, q11Num2) {
    document.getElementById('q11').innerHTML = q11Num1 ** q11Num2;
    console.log(q11Num1 ** q11Num2);
  }
  getPower(q11Num1, q11Num2);
}
// --------------------------------------------------------------------------------

// Answer of Question Number 12
function question12() {
  var q12Mark1 = Number(window.prompt('Please Enter The First Subject Mark'));
  var q12Mark2 = Number(window.prompt('Please Enter The Second Subject Mark'));
  var q12Mark3 = Number(window.prompt('Please Enter The Third Subject Mark'));
  var q12Mark4 = Number(window.prompt('Please Enter The Fourth Subject Mark'));
  var q12Mark5 = Number(window.prompt('Please Enter The Fifth Subject Mark'));
  var q12Total = q12Mark1 + q12Mark2 + q12Mark3 + q12Mark4 + q12Mark5;
  document.getElementById('q121').innerHTML = q12Total;
  document.getElementById('q122').innerHTML = q12Total / 5;
  document.getElementById('q123').innerHTML = q12Total / 500 * 100 + ' %';
  console.log(q12Total);
  console.log(q12Total / 5);
  console.log(q12Total / 500 * 100 + ' %');
}
// --------------------------------------------------------------------------------

// Answer of Question Number 13
function question13() {
  var q13month = Number(window.prompt('Please Enter Any Month Number'));
  if (q13month == 1 || q13month == 3 || q13month == 5 || q13month == 7 || q13month == 8 || q13month == 10 || q13month == 12) {
    document.getElementById('q13').innerHTML = 31;
    console.log(31);
  }
  else if (q13month == 4 || q13month == 6 || q13month == 9 || q13month == 11) {
    document.getElementById('q13').innerHTML = 30;
    console.log(30);
  }
  else if (q13month == 2) {
    document.getElementById('q13').innerHTML = 28;
    console.log(28);
  }
  else {
    document.getElementById('q13').innerHTML = 'Please Enter a Correct Month Number';
    console.log('Please Enter a Correct Month Number');
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 14
function question14() {
  var q14Mark1 = Number(window.prompt('Please Enter The First Subject Mark'));
  var q14Mark2 = Number(window.prompt('Please Enter The Second Subject Mark'));
  var q14Mark3 = Number(window.prompt('Please Enter The Third Subject Mark'));
  var q14Mark4 = Number(window.prompt('Please Enter The Fourth Subject Mark'));
  var q14Mark5 = Number(window.prompt('Please Enter The Fifth Subject Mark'));
  var q14Total = q14Mark1 + q14Mark2 + q14Mark3 + q14Mark4 + q14Mark5;
  var q14Percentage = q14Total / 500 * 100;
  document.getElementById('q141').innerHTML = q14Percentage + ' %';
  if (q14Percentage <= 100 && q14Percentage >= 90) {
    document.getElementById('q142').innerHTML = 'A';
    console.log('A');
  }
  else if (q14Percentage < 90 && q14Percentage >= 80) {
    document.getElementById('q142').innerHTML = 'B';
    console.log('B');
  }
  else if (q14Percentage < 80 && q14Percentage >= 70) {
    document.getElementById('q142').innerHTML = 'C';
    console.log('C');
  }
  else if (q14Percentage < 70 && q14Percentage >= 60) {
    document.getElementById('q142').innerHTML = 'D';
    console.log('D');
  }
  else if (q14Percentage < 60 && q14Percentage >= 50) {
    document.getElementById('q142').innerHTML = 'E';
    console.log('E');
  }
  else {
    document.getElementById('q142').innerHTML = 'F';
    console.log('F');
  }

}
// --------------------------------------------------------------------------------

// Answer of Question Number 15
function question15() {
  var q15month = Number(window.prompt('Please Enter Any Month Number'));
  switch (q15month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById('q15').innerHTML = 31;
      console.log(31);
      break;
    case 2:
      document.getElementById('q15').innerHTML = 28;
      console.log(28);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById('q15').innerHTML = 30;
      console.log(30);
      break;
    default:
      document.getElementById('q15').innerHTML = 'Please Enter a Correct Month Number';
      console.log('Please Enter a Correct Month Number');
      break;
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 16
function question16() {
  var q16char = window.prompt('Please Enter Any Character');
  switch (q16char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      document.getElementById('q16').innerHTML = 'Vowel';
      console.log('Vowel');
      break;
    default:
      document.getElementById('q16').innerHTML = 'Consonant';
      console.log('Consonant');
      break;
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 17
function question17() {
  var q17Num1 = Number(window.prompt('Please Enter The First Number'));
  var q17Num2 = Number(window.prompt('Please Enter The Second Number'));
  switch (q17Num1 > q17Num2) {
    case true:
      document.getElementById('q17').innerHTML = q17Num1;
      console.log(q17Num1);
      break;
    case false:
      document.getElementById('q17').innerHTML = q17Num2;
      console.log(q17Num1);
      break;
    default:
      document.getElementById('q17').innerHTML = 'Please Enter a Correct Number';
      console.log('Please Enter a Correct Number');
      break;
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 18
function question18() {
  var q18Num = Number(window.prompt('Please Enter Any Number'));
  switch (q18Num % 2) {
    case 0:
      document.getElementById('q18').innerHTML = 'Even';
      console.log('Even');
      break;
    case 1:
      document.getElementById('q18').innerHTML = 'Odd';
      console.log('Odd');
      break;
    default:
      document.getElementById('q18').innerHTML = 'Please Enter a Correct Number';
      console.log('Please Enter a Correct Number');
      break;
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 19
function question19() {
  var q19Num = Number(window.prompt('Please Enter Any Number'));
  switch (true) {
    case q19Num > 0:
      document.getElementById('q19').innerHTML = 'Positive';
      console.log('Positive');
      break;
    case q19Num < 0:
      document.getElementById('q19').innerHTML = 'Negative';
      console.log('Negative');
      break;
    case q19Num == 0:
      document.getElementById('q19').innerHTML = 'Zero';
      console.log('Zero');
      break;
    default:
      document.getElementById('q19').innerHTML = 'Please Enter a Number';
      console.log('Please Enter a Number');
      break;
  }
}
// --------------------------------------------------------------------------------

// Answer of Question Number 20
function question20() {
  var q20Num1 = Number(window.prompt('Please Enter The First Number'));
  var q20Sign = window.prompt('Please Enter The Sign');
  var q20Num2 = Number(window.prompt('Please Enter The Second Number'));
  switch (q20Sign) {
    case '+':
      document.getElementById('q20').innerHTML = q20Num1 + q20Num2;
      console.log(q20Num1 + q20Num2);
      break;
    case '-':
      document.getElementById('q20').innerHTML = q20Num1 - q20Num2;
      console.log(q20Num1 - q20Num2);
      break;
    case '*':
      document.getElementById('q20').innerHTML = q20Num1 * q20Num2;
      console.log(q20Num1 * q20Num2);
      break;
    case '/':
      document.getElementById('q20').innerHTML = q20Num1 / q20Num2;
      console.log(q20Num1 / q20Num2);
      break;
    default:
      document.getElementById('q20').innerHTML = 'Please Try Again';
      console.log('Please Try Again');
      break;
  }
}
// --------------------------------------------------------------------------------
