import {data} from "../src/arrays-objects"

describe("data object", ()=> {
    test("should return correct properties", () =>{
        expect(data).toEqual({
            "entry1":1,
            "entry2":2
        })
    })
})

test("Should work", () => {
    // Arrange
    const expected = false;

    //Act
    const actual = true;

    //Assert
    expect(actual).toBe(expected);
})