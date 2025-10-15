type User = {
    name: string,
    email: string,
    isActive: boolean,
    usr: User|null
}

type MyString = string;

function createUser(user : User): User {
    return user;
}

let newUser: User = {name: "Dipu",
    email: "dipu@gmail.com",
    isActive : false,
    usr: null}


createUser(newUser)

type NewUser = {
    readonly _id: string,
    name: string,
    email : string,
    creadCardDetails?: number
}

let myUser: NewUser = {
    _id : "1234",
    name: "Dipu",
    email: "dipu123@gmail.com",
}

let myUser2: NewUser = {
    _id : "1234",
    name: "Dipu",
    email: "dipu123@gmail.com",
    creadCardDetails : 123456
}

// let myUser3: NewUser = null; //not allowed
// let ss: String = null; //not allowed


type ComboType = User & NewUser;

let cmbType : ComboType = {
    _id: "235",
    name: "COmbo",
    email: "dipu@combo.com",
    isActive: false,
    usr: null,
    creadCardDetails : 3345
}
myUser.creadCardDetails = 1345;
// myUser._id = '123'; //not allowed
console.log(myUser._id);

export {}