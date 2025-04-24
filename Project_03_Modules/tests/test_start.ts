test("Should work", () => {
    // Arrange
    const expected = true;

    // Act
    const actual = true;

    // Assert
    expect(actual).toEqual(expected);
});

test("Should showcase arrow", () => {
    // Arrange
    const expected = 7;
    const expected_2 = 5;
    const add = (a: number, b: number) => {
        return a + b;
    };
    const add_2 = (a: number, b: number) => a + b;

    // Act
    const actual = add(3, 4);
    const actual_2 = add_2(3, 2);

    // Assert
    expect(actual).toEqual(expected)
    expect(actual_2).toEqual(expected_2)
})

test("Should showcase default parameters", () => {
    // Arrange
    const expected = 5;

    // Act
    const add = (a: number, b: number = 3) => a + b;
    const actual = add(2)


    // Assert
    expect(actual).toEqual(expected);
})

test("Should showcase spread operator", () => {
    // Arrange
    const expected = [1, 2, 3];
    const actual = [1, 2];
    const append_list = [3];

    // Act
    actual.push(...append_list);

    // Assert
    expect(actual).toEqual(expected);
})

test("Should showcase objects spreading", () => {
    // Arrange
    const source = {
        name: "foo",
        age: 4,
    };

    // Act
    const destination = source;
    const destination_2 = {...source};
    destination_2.age = 5;
    destination.name = "foo_2"

    // Assert
    expect(source.name).toEqual("foo_2");
    expect(destination_2.age).toEqual(5);
    expect(source.age).toEqual(4);
});

test("Should showcase rest parameters", () => {
    // Arrange
    const expected = 7;

    const add = (...numbers: number[]) => {
        return numbers.reduce((curResult, curValue) => {
            return curResult + curValue;
        }, 0);
    }

    // Act
    const actual_1 = add(3, 2, 1, 1);
    const actual_2 = add(6, 1);


    // Assert
    expect(actual_1).toEqual(expected);
    expect(actual_2).toEqual(expected);
})

test("Should showcase objects destructre", () => {
    // Arrange
    const expected = 7;
    const expected_name = "foo";
    const input_array = [1, 7]
    const input_object = {
        name: "foo",
        age: 4
    }

    // Act
    const [first_element, actual] = input_array;
    const {name: actual_name, age} = input_object;

    // Assert
    expect(actual).toEqual(expected);
    expect(actual_name).toEqual(expected_name);
})