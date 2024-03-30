#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000; //Dollar
let myPin = 12345; // Account Pin
let pinCheck = await inquirer.prompt([
    { message: "Enter your pin", type: "number", name: "pin" },
]);
if (pinCheck.pin === myPin) {
    let operation = await inquirer.prompt([
        { message: "Select any one ", type: "list", name: "list", choices: ["Withdraw", "Check balance"] },
    ]);
    if (operation.list === "Withdraw") {
        let Amount = await inquirer.prompt([
            { message: "Enter your Amount  ", type: "number", name: "amount", },
        ]);
        if (Amount.amount <= myBalance && Amount.amount >= 500) {
            myBalance -= Amount.amount;
            console.log("your remining balance is :" + myBalance);
        }
        else {
            console.log("Invalid Amount");
        }
    }
    else if (operation.list === "Check balance") {
        console.log("Your Balance is :" + myBalance);
    }
}
else {
    console.log("Invalid pin");
}
