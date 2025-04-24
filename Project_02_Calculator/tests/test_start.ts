import {InvestmentInput, InvestmentResult, calculateInvestment} from "../src/calculator";


interface Scenario {
    input: InvestmentInput;
    expected: InvestmentResult[] | string;
}

const scenarios: Scenario[] = [
    {
        input: {initialAmount: -1, annualContribution: 3, expectedReturn: 0.2, duration: 2},
        expected: "Initial Amount must be greater than 0"
    },
    {
        input: {initialAmount: 1, annualContribution: 3, expectedReturn: 0.2, duration: 0},
        expected: "Duration must be greater than 0"
    },
    {
        input: {initialAmount: 1, annualContribution: 3, expectedReturn: 0.0 , duration: 2},
        expected: "Expected return must be greater than 0"
    },
    {
        input: {initialAmount: 1, annualContribution: 3, expectedReturn: 0.2 , duration: 2},
        expected: [
            {"totalAmount": 4.2, "totalContributions": 3, "totalInterestEarned": 0.19999999999999996, "year": "Year 1"},
            {"totalAmount": 8.04, "totalContributions": 6, "totalInterestEarned": 1.04, "year": "Year 2"}]

    }


];

test.each(scenarios)("Should work with each",
    ({input, expected}) => {
        const result = calculateInvestment(input);
        expect(result).toEqual(expected);
    })

