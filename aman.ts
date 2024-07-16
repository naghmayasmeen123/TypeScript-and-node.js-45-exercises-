2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
would you like to learn some Python today?”

let myName: string = "Naghma Yasmeen"
console.log(`hello ${myName},why are you absent yesterday?`)


3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let firstName: string = "naghma yasmeen"
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));

4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new."

console.log(`Newton's third  law stated that,"every action has equal and opposite reaction."`)
console.log(`Quaid-e-Azam once  said,"Any thing is achievable"`);



5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string = "Quaid-e-Azam"
let message:string = "Anything is achievable"
console.log(`${famous_person} once said,"${message}"`);



6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name1:string ="\tNaghma Yasmeen\t" 
console.log(name1);
let name2:string ="Naghma\nYasmeen"
console.log(name2);


7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

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

7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

8. You should create four lines that look like this:

_____________________________________________

console.log(5 + 3)

_____________________________________________

console.log(5+3);
console.log(18-10);
console.log(16/2);
console.log(2*4);

9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNum:number = 3
console.log(`My favourite number is ${favNum}.`)


10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.let num1:number = 1 

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

11-Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let myFriend: string[] = [`Sarah`, `Farah`, `Aisha`, `Sana`, `Rafia`]; //arry is data type
for (let i = 0; i < myFriend.length; i++) {
  used forloop here
 console.log(myFriend[i]);
}

12-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let myFriend: string[] = [`Sarah`, `Farah`, `Aisha`, `Sana`, `Rafia`];
let message: string ="don't purchase israeli products"
array is a data type

for (let i = 0; i < myFriend.length; i++){
  console.log(myFriend[i] , `${message}`)
}
  forloop used here
  

//13-Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle."
let transportMode:string[] = ["Honda","yamaha","super star","unique"];
let statement: string = "I would like to own a"

for(let i=0; i < transportMode.length; i++){


console.log(`${statement}`, transportMode[i])
}

14-Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = [`Shumaila`,`Mehmooda`,`Safia`];
let message:string = "cordially you are invited to dinner on sunday at 9pm sharp"
for (let i = 0; i < guestList.length; i++){
  console.log(guestList[i] , `${message}`)
  
}


15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

 let guestList: string[] = [`Shumaila`,`Mehmooda`,`Safia`];
  let not_present : string = "safia"
 let new_guest : string = "Farah"
  guestList[2] = new_guest
    for (let i = 0; i < guestList.length;i++){
    console.log(guestList[i])
}
                                            
         //OR

 
 guestList.splice(2,1,new_guest)//start 4rom 2 & delet 1 item & replace it with Farah
 for (let i = 0; i < guestList.length;i++){
  console.log(guestList[i])
}



     console.log(`${not_present}\twill not comming at dinner`)



16-• Print a second set of invitation messages, one for each person who is still in your list.

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

 let guestList: string[] = [`Shumaila`,`Mehmooda`,`Farah`]


 

let secondMessage:string = "I have found a bigger dinner table so that why three more new guest join us on sunday"
 for (let i = 0; i < guestList.length; i++){
  console.log(guestList[i] , `${secondMessage}`)
 }
  

// add on guest to the beginning of array
  guestList.unshift("Sadia")

console.log(guestList)

//in middle
guestList.splice(2,0,"Aisha")
console.log(guestList)

//in last
guestList.push("Rafia")
console.log(guestList)
let newMessage:string = "you are invited for dinner,please come on time"



for(let i=0;i<guestList.length;i++){

    console.log(guestList[i] ,`${newMessage}`)
} 


17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

. one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//1-  
 let guestList:string[] = [`Sadia`,`Shumaila`,`Aisha`,`Mehmooda`,`farah`,`Rafia`];
 let newLineMessage:string ="I can invite only two guest for dinner because new dinner table would not arrive in time " 
    
for (let i = 0; i < guestList.length; i++){
      
      
  console.log(guestList[i],`${newLineMessage}`) 
  
  
}

   //2
  
    let messageTwo:string = "I'm sorry you are not invited to dinner."

while(guestList.length>2){
   let removeGuest = guestList.pop()
 console.log(removeGuest ,`\n${messageTwo}` )
 };

 for (let i = 0; i < guestList.length; i++){
    let thirdMessage = "you are still invited to dinner"  
      
      console.log(guestList[i],`${thirdMessage}`) 

 };

 //3
  guestList.splice(0,2);
 console.log(guestList);//empty array

18-Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

1-print original Array

let originalOrderArray:string[] = [`Europe`,`Australia`,`Canada`,`Bangladesh`,`Denmark`]
console.log(originalOrderArray)

//2-print in alphabetical order without modifying

console.log("alphabetical order:", [...originalOrderArray].sort());

// 3-still in original order array
console.log(originalOrderArray)

// 4-reversible order
console.log("reverse alphabetical order",[...originalOrderArray].sort().reverse());

// 5-still in original array
console.log(originalOrderArray)

// 6-reverse its order had change 
console.log(originalOrderArray.reverse())

// 7- reverse again
console.log(originalOrderArray.reverse())

// 8- alphabetical order of original array

console.log("alphabetical order" ,originalOrderArray.sort() )

// 9- reverse again
console.log(originalOrderArray.reverse())




19-Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList:string[] = [`Sadia`,`Shumaila`,`Aisha`,`Mehmooda`,`farah`,`Rafia`];
 let newLineMessage:string ="I can invite only two guest for dinner because new dinner table would not arrive in time " 
    
for (let i = 0; i < guestList.length; i++){
      
      
  console.log(guestList[i],`${newLineMessage}`) 
  
  
}

  //2
  
    let messageTwo:string = "I'm sorry you are not invited to dinner."

while(guestList.length>2){
   let removeGuest = guestList.pop()
 console.log(removeGuest ,`\n${messageTwo}` )
 };

 for (let i = 0; i < guestList.length; i++){
    let thirdMessage = "you are still invited to dinner"  
      
      console.log(guestList[i],`${thirdMessage}`) 

 };

 //3
  guestList.splice(0,2);
 console.log(guestList);//empty array
 console.log( "the number of people you are inviting to dinner",guestList.length);


 20-Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

 let riverArray:string[] = [`Indus`,`Sutlej`,`Chanab`,`Ravi`];//foreach is used for making list
 riverArray.forEach(riverArray =>{console.log(riverArray)
  })        
     // OR
    
     for(let i = 0 ; i < riverArray.length ;i++){
      console.log(riverArray[i])
    };
     21- They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 
interface obj{
    name:string
    age:number
    cell:number
    cars:string
    salary:number}
    let obj = {
        name: "Naghma",
        age : 40,
        cell: 3369452,
        cars:["honda","farari","bmw"],
        salary:() => {
            return"berozgar"
            }
        }
    
    console.log(obj)
    console.log("name",obj.name)
             //OR
    console.log(`name ${obj.name}`)
    console.log("age",obj.age)
    console.log("car",obj.cars[0])//print only 0 index
    
    console.log("salary",obj.salary())
    
    
    
    
    22- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
      
     let arr:string[] = [`saad`,`hammad`,`aman`,`zaid`,`sarah`]
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[6]);
    console.log(arr[1]);
    
    
    
    23- Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
    
    let car = 'subaru';
    
    console.log("Is car == 'subaru'? I predict True.")
    
    console.log(car == 'subaru')
    
    • Look closely at your results, and make sure you understand why each line evaluates to True or False.
    
    • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
    
    //test 1
     let a:number = 2
     let b:number = 5
     console.log("test:1 if a is equal to 2, I predict true" );
     console.log(a==2);
     console.log("test:1 if a is not equal to 2,I predict false");
     console.log(a!==2);
    
    //test:2
    console.log("test:2 if b is equal to 5, I predict true" );
    console.log(b==5);
    console.log("test:2 if b is not equal to 5,I predict false");
    console.log(b!==5);
    
    
    //test:3
    console.log("test:3 if b is less than or equal to a,I predict false");
     console.log(b<=a);
     
      console.log("test:3 if b is  greater than or equal to a,I predict true");
     console.log(b>=a);
    
    
    //test:4
     console.log("test:4 If a is less than b,i predict true");
    console.log(a<b);
     console.log("test:4 If a is greater than b ,i predict false");
     console.log(a > b);
    
    
    test:5
     console.log("test:5 if b is greater than a,I predict true ");
     console.log(b>a);
     console.log("test:5 if b is less than a,I predict false ");
     
    24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
    • Tests for equality and inequality with strings
    
    • Tests using the lower case function
    
    • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
    
    • Tests using "and" and "or" operators
    
    • Test whether an item is in a array
    
    • Test whether an item is not in a array
     
    
// equality & inequality
    let person1:string = "sami"
    let person2:string = "saad"
    console.log("if person1 is not equal to person2 , i predict true");
    console.log(person1 !== person2);
    console.log("if person1 is equal to person2, i predict false");
    console.log(person1 == person2);
    
    
    //to lower case
    let num:string = "NAGHMA YASMEEN";
    console.log(num.toLowerCase()=="naghma yasmeen");//true
    console.log(num.toLowerCase()==num);//false
    
    
    
    let a:number = 2
    let b:number = 5
     console.log("test:1 if a is equal to 2, I predict true" );
     console.log(a==2);
     console.log("test:1 if a is not equal to 2,I predict false");
     console.log(a!==2);
    
    
    
    console.log("test:3 if b is less than or equal to a,I predict false");
    console.log(b<=a);
    console.log("test:3 if b is  greater than or equal to a,I predict true");
    console.log(b>=a);
    
    
    console.log("test:4 If a is less than b,i predict true");
    console.log(a<b);
    console.log("test:4 If a is greater than b ,i predict false");
    console.log(a > b);
    
    //operators && and ||
    console.log("a is equal to 2 && b is greater than a" );//both condition must be true
    console.log(a==2 && b>a);
    console.log("b is equal to 2 || b is greater than a");//1 condition true ho tu b true ho  jaey ga
    console.log(b==2 || b>a);
    
    console.log("a is equal to 5 && b is greater than a" );
    console.log(a==5 && b>a);
    console.log("b is equal to 2 || a is greater than b");
    console.log(b==2 || a>b);
    
    
    let arr:string[] = [`saad`,`hammad`,`aman`,`zaid`,`sarah`]
    console.log("test arr", arr.includes(`zaid`));
    console.log("test arr", arr.includes(`aisha`));
    
    
    25- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
    • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
    
    • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
    
    let alien_color:string = "green";
    if(alien_color=="green"){
        console.log("the player earned 5 points")
    };print message
    
    
     let alien_color:string = "yellow";
     if(alien_color=="green"){
         console.log("the player earned 5 points")
    }; //no output
    
    
    
    26- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
    • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
    
    • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
    
    • Write one version of this program that runs the if block and another that runs the else block.
    
    let alien_color:string = "green";
     if(alien_color=="green"){
           console.log("the player earned 5 points")
     }
    else{
     console.log("the player earned 10 points")
     }
    
     let alien_color : string = "red";
     if(alien_color=="green"){
           console.log("the player earned 5 points")
     }
    else{
     console.log("the player earned 10 points")
     }
    
    
     27- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
    • If the alien is green, print a message that the player earned 5 points.
    
    • If the alien is yellow, print a message that the player earned 10 points.
    
    • If the alien is red, print a message that the player earned 15 points.
    
    • Write three versions of this program, making sure each message is printed for the appropriate color alien.     
    
    let alien_color:string = "green"
    
    
    
     if(alien_color=="green"){
           console.log("the player earned 5 points")
     }
    else if(alien_color == "yellow"){   
           console.log("the player earned 10 points")
    }
     else if(alien_color == "red"){
           console.log("the player earned 15 points")
     }
    else{
     console.log("nothing earnd")
      }
    
     //three versions
    //version 1:
    
    let alien_color:string = "green";
     if(alien_color=="green"){
           console.log("the player earned 5 points")
     }
    else if(alien_color=="yellow"){   
           console.log("the player earned 10 points")
    }
     else if(alien_color=="red"){
           console.log("the player earned 15 points")
     }
    else{
     console.log("unknown colour")
     };
    
    // //version 2:
    
    let alien_color:string = "yellow";
     if(alien_color=="green"){
           console.log("the player earned 5 points")
     }
    else if(alien_color=="yellow"){   
           console.log("the player earned 10 points")
    }
     else if(alien_color=="red"){
           console.log("the player earned 15 points")
     }
    else{
     console.log("unknown colour")
     };
    
    
     //version 3
    let alien_color:string = "red"
     if(alien_color=="green"){
      
        console.log("the player earned 5 points")
     }
    else if(alien_color=="yellow"){   
           console.log("the player earned 10 points")
    }
     else if(alien_color=="red"){
           console.log("the player earned 15 points")
     }
     else{
      console.log("unknown color")
      };
    
    
    
    28- Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
    • If the person is less than 2 years old, print a message that the person is a baby.
    
    • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    
    • If the person is at least 4 years old but less than 13, print a message that ``the person is a kid.``
    
    • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    
    • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    
    • If the person is age 65 or older, print a message that the person is an elder.
    
    let person_Age:number = 1;//change age & get result
    
    if (person_Age < 2) {
      console.log("the person is a baby.")
      
    }
    else if( person_Age >=2 && person_Age < 4 ){ 
    console.log("the person is a toddler.")
    }
    
    else if(person_Age >=4 && person_Age < 13){   
      console.log("the person is a kid.");
    }
    else if(person_Age >=13 && person_Age < 20 ){   
      console.log("the person is a teenager.");
     }
      
      else if(person_Age >=20 && person_Age < 65){   
        console.log("the person is an adult.");
      }
      
      else if(person_Age >=65 ){   
        console.log("the person is an elder.");
      }
      
    
    29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
    • Make a array of your three favorite fruits and call it favorite_fruits.
    
    • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
    
    
    
    let favourite_fruit:string[] = [`mango`,`cherry`,`orange`]
    if(favourite_fruit.includes(`mango`))
    console.log("i really like mango");
    
    if(favourite_fruit.includes(`cherry`))
      console.log("i really like cherry");
    
    if(favourite_fruit.includes(`orange`))
      console.log("i really like orange");
    
    else{
      console.log("unknown")
    };
    
    
    30- Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
    • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    
    • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    
    let userName_arr:string[] = [`admin`,`hammad`,`aman`,`zaid`,`sarah`]
    for(let i=0; i<userName_arr.length; i++){
    
      console.log(userName_arr[i])
    
     if(userName_arr[i] == "admin"){
      console.log( "Hello admin, would you like to see a status report?");
     }
    else{console.log(
    `Hello ,${userName_arr[i]} thank you for logging in again`
    
    )}
    };
    
    
31- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message "We need to find some users!"

• Remove all of the usernames from your array, and make sure the correct message is printed.

array is not empty

 let userName_arr:string[] = [`saad`,`hammad`,`aman`,`zaid`,`sarah`]

    if(userName_arr.length ===0){
        console.log( "We need to find some users!");
    }        
else{

for(let i = 0; i<userName_arr.length; i++){
    
    if(userName_arr[i] === `saad`){
        
        console.log( "Hello saad, would you like to see a status report?")
   }
  else{
    console.log( `Hello ,${userName_arr[i]} thank you for logging in again`)
}
}};
  
//for empty array
let userName_arr:string[] = [`saad`,`hammad`,`aman`,`zaid`,`sarah`]
userName_arr=[]
    if(userName_arr.length ===0){
        console.log( "We need to find some users!");
    }        
else{

for(let i = 0; i<userName_arr.length; i++){
    
    if(userName_arr[i] === `saad`){
        
        console.log( "Hello saad, would you like to see a status report?")
   }
  else{
    console.log( `Hello ,${userName_arr[i]} thank you for logging in again`)
}
}};
  
                            OR     

 //Remove all of the usernames from array

    userName_arr.splice(0,userName_arr.length)
console.log(userName_arr);
console.log("We need to find some users!") //correct message is printed.


32- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users:string[] = ["Aman","Zaid","Ebad","John","Sarah"]
let new_users :string[] = ["Saad","Hammad","AmaN","JOHN","Ebad"]


 new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
          console.log(`sorry ${new_one_user} the person will need to enter a new username `)
   }
 
else{
   console.log(`This username ${new_one_user} is available}`)
}
});



33- Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let ordinal_numbers:number[] = [1,2,3,4,5,6,7,8,9]

for (let oneNumber of ordinal_numbers){ 
    let ordinalEnding:string;
if(oneNumber === 1){
    ordinalEnding = "st"
}
else if(oneNumber === 2){
    ordinalEnding = "nd"
}
else if(oneNumber === 3){
    ordinalEnding = "rd"
}
else{ ordinalEnding= "th"
}   
    console.log(`${oneNumber}${ordinalEnding}`)
    
}


34- Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let favouritePizza:string[]=[`pepperoni`,`margherita`,`hawaiian`,`BBQ`]
  for(let i=0 ; i<favouritePizza.length ; i++){
  console.log(favouritePizza[i])
  
console.log(`I like ${favouritePizza[i]} pizza`)//back ticks used
  }

console.log(`Eating pizza can cause a real good feeling.pizza has fatty,sweet,rich and complex components that's why i love pizza`)



35- Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a greate pet!.

let petAnimal:string[] = [`dog`,`cat`,`goat`]

for(let i=0; i<petAnimal.length; i++){
  console.log(petAnimal[i]);
  console.log(`A ${petAnimal[i]} would make a great pet.`);
  
}

console.log(` Any of these animals would make a greate pet!.`);



36- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:string ,printMessage:string ){
  console.log(`you selected ${size} size shirt with print ${printMessage}  on shirt`);
  
}
make_shirt("medium", "be happy")



37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string = "large",printMessage:string ="I love TypeScript" ){
    console.log(`I selected ${size} size shirt with print ${printMessage} on shirt`);
    
}
  make_shirt()

  make_shirt("medium")

  make_shirt("small","I love Pakistan")



38- Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


function describe_city(city:string , country:string = "pakistan"){

          console.log(`${city} is in ${country}`)
}

          
          
describe_city("Karachi");
describe_city("Lahore");
describe_city("Cairo","Egypt");




39- City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.



function city_country (city:string,country:string):string{
  return`${city},${country}`
}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Bursa","Turkey"));
console.log(city_country("Cairo","Egypt"));



40-Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

object in function

function make_album(artist_name:string,album_title:string,tracks?:number){
  let album: {artist:string,title: string,tracks?:number}={
    artist:artist_name,
    title:album_title,
  };
  if (tracks !== undefined){
    album.tracks = tracks
  }
  return album;
} 
let album1=make_album("Usman","Album title 1")
let album2=make_album(" Zafar","Album title 2")
let album3=make_album(" Ali","Album title 3",10)

console.log(album1);
console.log(album2);
console.log(album3);


41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.  

function show_magicians(magicians:string[]):void{
  magicians.forEach(name => console.log(name)
  )
}
let magician_names:string[] = ["Saad","Asad","Aman"]
show_magicians(magician_names);



42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//define the magician name in function.
function show_magicians(magicians:string[]){
 magicians.forEach(name => console.log(name)
  );
}

//save magician name by return
function make_great(magicians:string[]){
  return magicians.map(name => `The great ${name}`)
}

let magicians_names = ["Saad","Asad","Aman"]
let great_magicians = make_great(magicians_names)

//call make_great function to modiyfy magicians name.

make_great(magicians_names)
console.log(great_magicians);// print in array(not necessary)


//call show_magicians to modiyfy magicians list. 
show_magicians(great_magicians) //print in list
 

43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function show_magicians(magicians:string[]){
  magicians.forEach(name => console.log(name)
   );
 }
 
 //save magician name by return
 function make_great(magicians:string[]){
   return magicians.map(name => `The great ${name}`)
 }
 

 let magicians_name = ["Saad","Asad","Aman"]
 let copy_magicians_name = magicians_name.slice()
 let copy_make_great = make_great(copy_magicians_name)

console.log("origional array")
 show_magicians(copy_magicians_name)

console.log("copy_make_great");
show_magicians(copy_make_great)


44- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(...items:string[]) : void{
  console.log("\nmake a sandwich with following items\n");
  items.forEach(single_item => console.log(single_item))
    console.log("\nNow enjoy sandwich");
    
  }
  //call the function 3-times with different arguments.
  sandwich("mint_past","butter","bread")
  sandwich("bread","chicken","onion","cucumber","cabbage","cheez")
  sandwich("bread","shamikabab","ketchup")



45- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function create_car(manufacturer:string,model:string,...options: string[]){

    
    let car:{[key:string]:any} = {
        manufacturer: manufacturer,
        model : model,
    
}
   options.forEach(option => {
   
   
        let[key,value] = option.split(":");
        car[key.trim()] = (value.trim())    
    });
   return car;
}
let my_car = create_car("Toyota","corolla","color : black","year : 2024","sunroof:true")
console.log(my_car)

