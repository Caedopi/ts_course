test("Should showcase types intersection", () => {
    // Arrange
    type FileData = {
        path: string;
        content: string;
    }

    type Status = {
        isOpen: boolean;
        errorMessage?: string;
    }

    type AccessedFileData = FileData & Status;

    const expected = {
        path: "ASDF",
        content: "SDFG",
        isOpen: true,
        errorMessage: "SDFG"
    }

    // Act
    const actual: AccessedFileData = {
        path: "ASDF",
        content: "SDFG",
        isOpen: true,
        errorMessage: "SDFG"
    }

    // Assert
    expect(actual).toEqual(expected);
})

test("Should showcase type guards", () => {
    // Arrange
    const expected_1 = "Dog";
    const expected_2 = "Cat";

    type Cat = {catName: string};
    const myCat: Cat = {
        catName: "Cat",
    }

    type Dog = {dogName: string};
    const myDog: Dog = {dogName: "Dog"};

    type InputAnimal = Cat | Dog;

    function returnAnimalName(input: InputAnimal) {
        if ('catName' in input) {
            return input.catName;
        }
        return input.dogName;
    }

    // Act
    const actual_1 = returnAnimalName(myDog);
    const actual_2 = returnAnimalName(myCat);

    // Assert
    expect(actual_1).toEqual(expected_1)
    expect(actual_2).toEqual(expected_2)
})