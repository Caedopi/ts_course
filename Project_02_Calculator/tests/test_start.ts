import {InvestmentInput, calculateInvestment} from "../src/calculator";


test("Should work", () => {
    // Arrange
    const input_data: InvestmentInput = {
        initialAmount : 2,
        annualContribution : 3,
        expectedReturn : 9,
        duration: 2
    }

    const expected = ["Duration is 2", "Expected return is 9"]

    // Act
    const actual = calculateInvestment(input_data)


    // Assert
    expect(actual).toEqual(expected)
})