let empty :[] = []

let nums: number[] = [1,2,3,4]

let str: Array<String> = [];
let str1:ReadonlyArray<String> = ["1"];
// str1[0] ="dipu";

let numOrStrArr: number|string[] = 5;
let numArrOrStrArr: number[]|string[] = [1,2,3];

type User = {
    name: string,
    email: string,
    isActive: boolean,
    usr: User|null
}
let userArray : User[] = [];


let data: [number, string, boolean];
data = [42, "Hello", true];

let datMix: (number | string | boolean)[];
datMix = [1, "apple", false, 99, "banana", true];

let dataFixAndMix: [number, string, boolean, ...(number | string | boolean)[]];
dataFixAndMix = [5, "yes", true, "extra", 10, false];

type Allotment = "ailse" | "middle" | "last";

let mySeaat: Allotment = "ailse";
// let myNewSeat : Allotment = "newseat"; // gives error