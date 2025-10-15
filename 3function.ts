function addTowNum(num1: number, num2 : number = 2): number  {
    return num1 + num2;
    // return "hello";
}

let s = addTowNum(5,6);
let ss = addTowNum(2);

console.log(s);
console.log(ss);

function getValue(myVal : number) : number | string {
    if (myVal > 0) {
        return myVal;
    }
    return "200 OK";
}


const hero = ['dipu', 'sah'];

hero.map((heros: string) : string => {
    return heros.toUpperCase();
})


function handleError (errmsg: string): never{
    throw new Error(errmsg);
}

function greet(): void{
    console.log("Hello");
    return;
}

function greet2(): never{
    throw new Error("error");

}
export {};