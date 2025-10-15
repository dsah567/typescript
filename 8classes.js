class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getemail() {
        return this.email;
    }
   
    set setEmail(email) {
        this.email = email;
    }
}
const hitesh = new User("dipu@gmail.com", "Dipu");
// hitesh.email = "sfd"
// hitesh.name = "adfj";
console.log(hitesh);
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    showDetails() {
        console.log(`Car: ${this.model}, Year: ${this.year}`);
    }
}
export {};
