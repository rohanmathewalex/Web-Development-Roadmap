let js = 'amazing';
console.log(2+2);

//Values and variables
let firstName = "Rohan"//firstname is the variable and value is rohan 

//Conisder variablr as a box, inside box we can place object and take it when it is necessary, here firstName  is the box and object is Rohan places inside it, so we can acces any time the value rohan from it.
console.log(firstName);

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
let country = 'India';
let continent ='Asia';
let population = '1.38 billion';
console.log(`The country ${country} is part of the continent of ${continent} and has population around ${population}` )