import {InvestmentInput, calculateInvestment, printResults} from "../src/calculator";


interface Scenario {
    input: InvestmentInput;
    expected: string[];
}

const scenarios: Scenario[] = [
    {
        input: {initialAmount: 2, annualContribution: 3, expectedReturn: 9, duration: 2},
        expected: ["Duration is 2 years", "Expected return is 9 years"]
    }
];

test.each(scenarios)("Should work with each",
    ({input, expected}) => {
        const result = calculateInvestment(input);
        expect(result).toEqual(expected);
    })


test("Should print result", () => {
    // Arrange
    const input_list = ["Duration is 2 years", "Expected return is 9 years"]

    const expected = "Duration is 2 years; Expected return is 9 years"

    // Actual
    const actual = printResults(input_list)

    // Assert
    expect(actual).toEqual(expected)
})

