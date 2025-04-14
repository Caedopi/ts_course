import {data} from "../src/arrays-objects";
import {add} from "../src/basics";
import {Role} from "../src/enums";
import {ValidateStringOrNumber} from "../src/flexible-types"
import {User} from "../src/functions"
import {generate_error} from "../src/special-types";


describe("data object", () => {
    test("should return correct properties", () => {
        expect(data).toEqual({
            "entry1": 1,
            "entry2": 2
        })
    });

    test("should add numbers", () => {
        expect(add(5, 4)).toEqual(9)
    });
});

test("Should work", () => {
    // Arrange
    const expected = false;

    //Act
    const actual = false;

    //Assert
    expect(actual).toBe(expected);
})

describe("enums", () => {
    test("should return user role", () => {
        // Arrange
        const expected: Role = Role.Admin

        // Act
        const actual = 0;

        // Assert
        expect(actual).toBe(expected)
    })
})

describe("flexible types", () => {
    test("should work", () => {
        // Arrange
        const expected1: string = "asdf";
        const expected2: number = 3;
        let actual1: string | number;
        let actual2: string | number;

        // Act
        actual1 = "asdf";
        actual2 = 3;

        // Assert
        expect(actual1).toEqual(expected1);
        expect(actual2).toEqual(expected2);
    })

    test("should not work", () => {
        expect(() => ValidateStringOrNumber(true)).toThrow("Expected a number or string");
    })
})

describe("methods as arguments", () => {
    test("should work", () => {
        // Arrange
        const Reksio: User = {
            name : "Reksio",
            age : 2,
            greet : whoof
        }
        let expected: string = "Whoof!"

        // Act
        let actual = Reksio.greet()

        // Assert
        expect(actual).toEqual(expected)

    })
})

function whoof(): string {
    return "Whoof!"
}


describe("special types", () => {
    test("should work", () => {

        // Act
        let actual_null: null = null;

        // Arrange
        expect(actual_null).toEqual(null)
    })
    test("should also work", () => {

        // Assert
        expect(()=> generate_error()).toThrow("xo")
    })
    test("should handle null", () => {
        // Arrange
        const input_1 = "";
        const input_2 = null;
        const expected_1 = false;
        const expected_2 = "";


        // Act
        const actual_1 = input_1 || false;
        const actual_2 = input_1 ?? false;
        const actual_3 = input_2 ?? false;

        // Assert
        expect(actual_1).toEqual(expected_1)
        expect(actual_2).toEqual(expected_2)
        expect(actual_3).toEqual(expected_1)
    })
})