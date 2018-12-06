
// var variables

var name = "hi..!! myself abrar hussain";
console.log(name);
var from ="i am from Sherqilla, punyal district ghizer";
console.log(from);
var education ="i have done Bs honor from karakoram international university gilgit baltistan in computer science department";
console.log(education);
var address ="satellite town lane no 3 jutial gilgit";
console.log('current address:  '+address);
var number ="mobile# is 03459600245";
console.log('contact: '+number);
var work ="currently i join uconnect for training as a trainee and learning html/css, javascript as well "
console.log('Current-status::  '+work);

// let variables

let first="my first name is abrar";
console.log('first name:  '+first);
let middle="middle name is hussain";
console.log('middle name:  '+middle);
let last="last name is khan";
console.log('last name:  '+last);

// const variable

const dep="computer science";
console.log('department  '+dep);


// var admin ="john";
// var name=admin;
// alert(admin);

var a=2;
var b=3;
console.log(a+b);
var a=3;
var b=3;
console.log(a * b);

let Array = [1, 2, 3, 4, 5];
Array.push(5);
console.log(Array);

const user ="abrar";
console.log(user);

// const SUCCESS_MASSAGE = "SUCCESSFULLY LOGIN";
// alert (SUCCESS_MASSAGE);
// console.log(SUCCESS_MASSAGE);


// arthimetic operators///

            var a = 33;
            var b = 10;
            var c = "Test";
            var linebreak = "<br />";
         
            document.write("a + b = ");
            result = a + b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a - b = ");
            result = a - b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a / b = ");
            result = a / b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a % b = ");
            result = a % b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a + b + c = ");
            result = a + b + c;
            document.write(result);
            document.write(linebreak);
         
            a = ++a;
            document.write("++a = ");
            result = ++a;
            document.write(result);
            document.write(linebreak);
         
            b = --b;
            document.write("--b = ");
            result = --b;
            document.write(result);
            document.write(linebreak);

            // --- comperison operator

            var a = 10;
            var b = 20;
            var linebreak = "<br />";
      
            document.write("(a == b) => ");
            result = (a == b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a < b) => ");
            result = (a < b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a > b) => ");
            result = (a > b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a != b) => ");
            result = (a != b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a >= b) => ");
            result = (a >= b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a <= b) => ");
            result = (a <= b);
            document.write(result);
            document.write(linebreak);

            // logic operators

            var a = true;
            var b = false;
            var linebreak = "<br />";
      
            document.write("(a && b) => ");
            result = (a && b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a || b) => ");
            result = (a || b);
            document.write(result);
            document.write(linebreak);
         
            document.write("!(a && b) => ");
            result = (!(a && b));
            document.write(result);
            document.write(linebreak);

            // bitwise operators

            var a = 2; // Bit presentation 10
            var b = 3; // Bit presentation 11
            var linebreak = "<br />";
         
            document.write("(a & b) => ");
            result = (a & b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a | b) => ");
            result = (a | b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a ^ b) => ");
            result = (a ^ b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(~b) => ");
            result = (~b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a << b) => ");
            result = (a << b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a >> b) => ");
            result = (a >> b);
            document.write(result);
            document.write(linebreak);

            // assignment operators

            var a = 33;
            var b = 10;
            var linebreak = "<br />";
         
            document.write("Value of a => (a = b) => ");
            result = (a = b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a += b) => ");
            result = (a += b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a -= b) => ");
            result = (a -= b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a *= b) => ");
            result = (a *= b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a /= b) => ");
            result = (a /= b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a %= b) => ");
            result = (a %= b);
            document.write(result);
            document.write(linebreak);

            // Miscellaneous Operator has two types
            // 1:conditional operator

            var a = 10;
            var b = 20;
            var linebreak = "<br />";
         
            document.write ("((a > b) ? 100 : 200) => ");
            result = (a > b) ? 100 : 200;
            document.write(result);
            document.write(linebreak);
         
            document.write ("((a < b) ? 100 : 200) => ");
            result = (a < b) ? 100 : 200;
            document.write(result);
            document.write(linebreak);

            // 2:typeof Operator

            var a = 10;
            var b = "String";
            var linebreak = "<br />";
         
            result = (typeof b == "string" ? "B is String" : "B is Numeric");
            document.write("Result => ");
            document.write(result);
            document.write(linebreak);
         
            result = (typeof a == "string" ? "A is String" : "A is Numeric");
            document.write("Result => ");
            document.write(result);
            document.write(linebreak);
       
      
