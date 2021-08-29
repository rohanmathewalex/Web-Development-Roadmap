let js = 'amazing';
// console.log(2+2);

//Values and variables
let firstName = "Rohan"//firstname is the variable and value is rohan 

//Conisder variablr as a box, inside box we can place object and take it when it is necessary, here firstName  is the box and object is Rohan places inside it, so we can acces any time the value rohan from it.
// console.log(firstName);

//Convention and rules for naming variables
/*
-  cammel case - firstName(first word first first    letter is small letter and second word first letter should be capital)

- variablr name cannot start with numbers
  [variable name only contain numbers,letters,underscores or dollar assign]
  eg:let rohan_matilda, let $function
- Reserved keywords are not allowed for variable namming

- should not start a varible name with capital letter
 [eg: Person = 'johns' -> worng, because in javascript this convetion is used with an uppercase letter for a specific use case in javasript , which is object-oriented programming ]

 - Real constant are written in full capital leter in javscript
 [eg: PI=3.14;]

 - variable name should be descriptive beacause by reading names of variable should able to understand what value it holds
 */
//descriptive nameing eg
let firstJob = "developer";
let secondJob = "CEO";

/*
  Praxctice section

  1. Decalre a variable called 'country','continent' and 'population' and assign their values acording to ypur own country  (population in millions)
  2. Log their values to the console.
 */
// let country = 'India';
// let continent ='Asia';
// let population = '1.38 billion';
// console.log(`The country ${country} is part of the continent of ${continent} and has population around ${population}`)


// //Datatype and vlaues
// let javasriptIsFun = true;
// console.log(javasriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'rohan');
// //javascript dynamic typing
//  javasriptIsFun = 'Yes!';
//  console.log( javasriptIsFun)
//  console.log(typeof javasriptIsFun);
// //undefine datatype
//  let year;
//  console.log(year);
// console.log(typeof year)

// year = 1998;
// console.log(year);
// console.log(typeof year);


//Null
// console.log(typeof null);


//Assignment
/*
1. Declare a variable called 'isLand' and set its value according to your country. The variable should hold a boolean value. Also declare a vaariable 'language',but dont assign it any value yet.
2.Log the types of 'isLand','population','country' and 'language' to the console
 */
// let isLand = false;
// let language;
// let population =10;
// let country = "India";
// console.log(typeof isLand);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof country);


/* 
Variable Mutation 
- The variable value may change in future is called variable mutation
*/
let age = 30;
age =31;

/**
 * constant Varibale
 * The value will never change in future and if try to cahnge the value we end up with TypeError
 */
const birthYear = 1998;
//birthYear =1997;
//When try to change value here , we will get an TypeError: Assignment to constant variable

//Assignment No:3
/*
1. Set the value of 'Language' to the language spoken where you live (some countries   have multiplr languages, but just choose one)
2. Think about which variable should be const variable (which values will never change, and which might change?)Then,change these variables to const.
3. Try to change one of the changed variable now, and observe what happens
 */

const language = 'Malayalam';
const country = 'India';
const continent = 'Asia';
let population = "102 billion";
console.log(`${language} ${country}  ${continent} ${population}`)
