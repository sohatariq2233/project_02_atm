import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Welcome to ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login Successfully");
    console.log(`Current Account Balance is ${myBalance}`);
    let opperationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Check balance", "Withdraw Cash"]
        }
    ]);
    if (opperationAns.operation === "Check balance") {
        console.log(`Current Account Balance is ${myBalance}`);
    }
    else if (opperationAns.operation === "Withdraw Cash") {
        let amountWithdraw = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter the amount for Withdrawl:",
            }]);
        if (amountWithdraw > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountWithdraw.amount;
            console.log(`${amountWithdraw.amount} Withdraw Successfully`);
            console.log(`Your remaining Balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin");
}