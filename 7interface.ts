interface User {
    email : string,
    userId : number,
    googleId?: string,
    statrtTrail(nae: string): string
}

const hitesh: User = {
    email: "h@h.com",
    userId: 1234,
    statrtTrail(){
        return "helloo";
    },
    reopening: true
}

interface User {
    reopening : true
}

interface Admin extends User {
    roll : "admin" | "learner"
}

export {}