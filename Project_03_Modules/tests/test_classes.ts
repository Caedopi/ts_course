import {User} from "../src/user";
import {ShorterUser} from "../src/shorter_user";
import {PrivateUser} from "../src/private_user";

interface Scenario {
    input: User;
    expected: ShorterUser;
}

const scenarios: Scenario[] = [
    {
        input: new User("Max", 43),
        expected: new ShorterUser("Max", 43)
    }
];

test.each(scenarios)("Should instantiate class", ({input, expected}) => {
    // Arrange

    // Act
    const actual = {...input}

    // Assert
    expect(actual).toEqual(expected);
})

test("Should showcase getter and setter", () => {
    // Arrange
    const expected = "Kolonko";
    const expectedName = "Maks";
    const myUser = new PrivateUser("Max", "Kolonko")

    // Act
    const actual = myUser.surname
    myUser.name = expectedName;
    const actualName = myUser.name;

    // Assert
    expect(actual).toEqual(expected)
    expect(actualName).toEqual(expectedName);
})

test("Should showcase getter error", () => {
    // Arrange
    const myUser = new PrivateUser("Max", "Kolonko")


    // Assert
    expect(() => myUser.name = "").toThrowError()
    expect(() => myUser.name = "").toThrow(" is not a valid name");

})