
// Banking company 3 kinds of loan
//1.personal home car loan
// different home rate

// const typeOfLoan = 'Home';
// const p = 150000;
// const n = 10;
// const Loan = (typeOfLoan) =>{
     
//     if(typeOfLoan === 'Home'){
//         const r = 12;

//         return (p*n*r)/100;
//     }else if(typeOfLoan === 'Car'){
//         const r = 10;

//         return (p*n*r)/100;
//     }else{
//         const r = 12;

//         return (p*n*r)/100;
//     }
// }

// const loanEMI = Loan('Home',p,n);
// console.log(loanEMI)

const loanFactory = (r) =>{
    return[(p,n) => p*n*r/100,
            (n) => r = n
        ];
}

const [carLoanCalculator,carLoanUpdator] = loanFactory(10);
const personalLoanCalculator = loanFactory(12);
const homeLoanCalculator = loanFactory(8);

console.log(carLoanCalculator(1000300,6));
carLoanUpdator(11);
console.log(carLoanCalculator(1000300,6));
