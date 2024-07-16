//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
//would you like to learn some Python today?”

let myName: string = "Naghma Yasmeen"
console.log(`hello ${myName},why are you absent yesterday?`)


//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let firstName: string = "naghma yasmeen"
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));

//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
//following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new."

console.log(`Newton's third  law stated that,"every action has equal and opposite reaction."`)
console.log(`Quaid-e-Azam once  said,"Any thing is achievable"`);



//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string = "Quaid-e-Azam"
let message:string = "Anything is achievable"
console.log(`${famous_person} once said,"${message}"`);



//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name1:string ="\tNaghma Yasmeen\t" 
console.log(name1);
let name2:string ="Naghma\nYasmeen"
console.log(name2);


//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

let num1:number = 1 
let num2:number = 7
console.log(num1+num2);
let num3:number = 10
let num4:number = 2
 console.log(num3-num4);
 let num5:number = 4
console.log(num4*num5);
let num6:number = 16
console.log(num6/num4);

//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

//8. You should create four lines that look like this:

//_____________________________________________

//console.log(5 + 3)

//_____________________________________________

console.log(5+3);
console.log(18-10);
console.log(16/2);
console.log(2*4);

//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNum:number = 3
console.log(`My favourite number is ${favNum}.`)


//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.let num1:number = 1 

Naghma Yasmeen
dated:8-6-2024
Comment:
I have used here arthematic operators

let num2:number = 7
console.log(num1+num2);
let num3:number = 10
let num4:number = 2
 console.log(num3-num4);
 let num5:number = 4
console.log(num4*num5);
let num6:number = 16
console.log(num6/num4);

COMMENT:i have used camel case and template literal ${}
let famous_person:string = "Quaid-e-Azam"
let message: string = "Anything is achievable"
console.log(`${famous_person} once said,"${message}"`);
