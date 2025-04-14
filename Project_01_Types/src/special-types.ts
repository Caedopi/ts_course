// export function assign_null(): void {
//     let nullable_variable: null;
//     nullable_variable = 2
//     return ;
// }

export function generate_error(msg: string = "xo") {
    throw new Error(`Generate error: ${msg}`);
}