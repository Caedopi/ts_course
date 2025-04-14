export function ValidateStringOrNumber(value: unknown): string | number{
if( typeof value !=="string" && typeof value !== "number" ) {
    throw new Error("Expected a number or string");
    }
    return value;
}



let age: string | number = 36;

age = "37";
