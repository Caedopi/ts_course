import {User} from "../src/user";
import {ShorterUser} from "../src/shorter_user";
import {PrivateUser} from "../src/private_user";
import {DerivedUser} from "../src/derived_user";
import {ConcreteUser} from "../src/concrete_user";
import {IAnimal} from "../src/IAnimal";
import {Dog} from "../src/Dog";
import {Cat} from "../src/Cat";
import requireActual = jest.requireActual;

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

test("Should showcase static property", () => {
    // Arrange
    const expected = "static value";

    // Act
    const actual = PrivateUser.static_value;
    const actual_2 = PrivateUser.get_static_value()

    // Assert
    expect(actual).toEqual(expected)
    expect(actual_2).toEqual(expected)
})

test("Should showcase inheritacne", () => {
    // Arrange
    const expected = "static value";
    const expected_name = "Xolo";

    // Act
    const actual = DerivedUser.get_static_value()
    const myUser = new DerivedUser("Max", "Kolonko", "Journalist")
    const actual_name = myUser.name;

    // Assert
    expect(actual).toEqual(expected);
    expect(expected_name).toEqual(actual_name);
})

test("Should showcase protected parameters", () => {
    // Arrange
    const expected = "Max";

    // Act
    const myUser = new DerivedUser("Max", "Kolonko", "Journalist");
    myUser.change_name()
    const actual = myUser.name

    // Assert
    expect(actual).toEqual(expected);
})

test("Should showcase abstract classes", () => {
    // Arrange
    const expected = "Max";
    const myUser = new ConcreteUser("Max");

    // Act
    const actual = myUser.name

    // Assert
    expect(actual).toEqual(expected);
})

test("Should showcase interfaces", () => {
    // Arrange
    const expected: IAnimal = new Dog("Reksio");

    // Act
    const actual: IAnimal = new Cat("Bonifacy");

    // Assert
    expect(actual.sound()).toEqual("Meow!")
    expect(expected.name).toEqual("Reksio");
})

test("Should showcase interfaces merging", () => {
    interface IAnimal {
        name: string;
        sound(): string;
    }

    interface IAnimal {
        walkingMethod: string;
    }

    const actual: IAnimal = {
        name: "Romek",
        walkingMethod: "Running",

        sound(): string {
            return "Yayaya";
        }
    };

    // Assert
    expect(actual.name).toEqual("Romek");
})

test("Should showcase interfaces extension", () => {
    // Arrange
    interface IAnimal {
        name: string;
    }
    interface ISeaAnimal extends IAnimal {
        swimSpeed: number;
    }

    const expectedTurtle = {
        name: "Romek",
        swimSpeed: 0,
    }

    // Act
    const turtle: ISeaAnimal = {
        name: "Romek",
        swimSpeed: 0,
    }

    // Assert
    expect(turtle).toEqual(expectedTurtle)
})