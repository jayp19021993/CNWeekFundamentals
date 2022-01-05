// const pressGrindBeans = () =>{
//     console.log("grinding for 20 seconds")
// } 

// pressGrindBeans();  


// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//   if (coffeeIsGrinding) {
//     console.log("Stopping the grind.")
//     coffeeIsGrinding = false;
//   } else {
//     console.log("Grinding is about to begin...")
//     coffeeIsGrinding = true;
//   }
// }

// pressGrindBeans();
// pressGrindBeans(); 

// let accnumber = 50449921 



// const addUp =(nun1, num2) =>{
//     return nun1 + nun2;
// } 
// addUp(7,3) 
// // want show the answer whit out a consol.log
// console.log(addUp); 

// function factorial (n) {
//     if ((n =>0) ||(n=1)) {
//         return 1; 
//     } else { 
//         return (n *factorial(n-1));
// }
// }
// console.log(factorial(33)); 

// let orderCount =0; 
// const takeOrder=(topping)=>{
//     console.log(`pizza whith ${topping}`) 
//     orderCount++;    
// } 
// takeOrder("pepperoni") 

// totalNumbr = 0; 
// function topping() 



// let accnumber = 123456;
// let amount = 100; 
// let pin =1234; 
// const atm =(amount , accnum)=>{
//     console.log (`withdrawing ${amount} form account ${accnum}`); 
// } 

// atm (amount,accnumber); 

// function calculateAmt(inquiry, withdrawal, deposit){
//     let availableBal = 10; 
//     let a= inquiry(availableBal);
//     let b= deposit(availableBal);
//     let c= withdrawal(availableBal);
//     if(a){

//         availableBal =  inquiry(availableBal);
//     }
//     else if(b){
//         availableBal =  availableBal - withdrawal;
//         if(withdrawal > availableBal){
//             alert("You have insufficient funds");  
//         }
//     }
//     else{
//         availableBal =  availableBal + deposit;
//     }
//     return availableBal;
// } 



// Cash Machine Function Challenge chriss
// let pinNumber = 2425;
// let balance = 2000

// const cashMachine = (pin, amount) => {

//   if ((pin === pinNumber) && (amount <= balance)){
//     const newBalance = balance - amount;
//     console.log(`Succesfull! You have withdrawn £${amount}, your new balance is £${newBalance}.`)
//   } else if ((pin === pinNumber) && (amount > balance)){
//     console.log(`You cannot withdraw more than your current balance of £${balance}`)
//   } else if (pin != pinNumber){
//     console.log("Your pin is incorrect!")
//   } else {
//     console.log (`Your pin is incorrect or your balance isn't high enough!`)
//   }
// }

// cashMachine(2423, 300);