export type User = {
    name: string;
    age: number;
    greet: () => string;
};

exop

function add (a: number, b:number): number {
    return a + b;
}

function log(message:string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage)
    throw new Error(errorMessage);
}

const logMsg = (msg:string) => {
    console.log(msg);
};

function performJob(cb: () => void) {
    cb ();
}

function getJob(cb: (m:string) => void) {
    cb("Job done1");
}



