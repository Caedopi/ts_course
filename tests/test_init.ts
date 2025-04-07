import {data} from "../src/arrays-objects";
import {add} from "../src/basics";
import {Role} from "../src/enums";


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
})