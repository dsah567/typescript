class User {
    private email : string;
    readonly name : string;
    city: string;

    constructor (email: string, name: string){
        this.email = email;
        this.name = name;
    }

    get getemail(): string {
        return this.email
    }
    set setEmail(email: string) {
        this.email = email
    }
}

const hitesh = new User("dipu@gmail.com", "Dipu")
// hitesh.email = "sfd"
// hitesh.name = "adfj";
console.log(hitesh);


class Car {
    constructor(private model: string, private year: number) {}
  
    showDetails() {
      console.log(`Car: ${this.model}, Year: ${this.year}`);
    }
  }

export {}