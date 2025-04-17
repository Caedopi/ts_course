export type InvestmentInput = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

export function calculateInvestment(data: InvestmentInput) {
    return [`Duration is ${data.initialAmount} years`, `Expected return is ${data.expectedReturn} years`]
}

export function printResults(results: string[]) {
    return results.join("; ")
}


