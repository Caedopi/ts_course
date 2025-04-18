export type InvestmentInput = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

export type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

export type CalculationResult = InvestmentResult[] | string;

export function calculateInvestment(data: InvestmentInput): CalculationResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = data;
    if (initialAmount < 0) {
        return "Initial Amount must be greater than 0";
    }
    if (duration <= 0) {
        return "Duration must be greater than 0";
    }
    if (expectedReturn <= 0) {
        return "Expected return must be greater than 0";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total *= (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total += annualContribution;

        annualResults.push({
            year: `Year ${i+1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        })
    }
    return annualResults
}

export function printResults(results: CalculationResult) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const result of results) {
        console.log(result.year);
        console.log(result.totalAmount);
        console.log(result.totalInterestEarned);
        console.log(result.totalContributions);
    }
}


