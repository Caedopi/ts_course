export type InvestmentInput = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

export function calculateInvestment(data: InvestmentInput) {
    return ["Duration is " + data.initialAmount, "Expected return is 9"]
}

// function printResults(results) {
//
// }
//
//
// const results = calculateInvestment(...data);
//
// printResults(results);