
test("Should work", ()=> {
    function foo(): string {
        return "Because";
    };
    foo.I = ()=> "I can";
    const expected = "I can";
    const actual = foo.I();
    expect(actual).toBe(expected);
    
})