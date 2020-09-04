class Person {
    // Exemplo de um construtor

    constructor(name){
        this.name = name;
    }

    // Exemplo de get e set

    get fullName(){
        return this.name + "something";
    }

    set fullName(value){
        this.name = value;
    }

    // Exemplo de um método

    sayName(){
        console.log(this.name);
    }

    // Exemplo de um método estático

    static printAge(age) {
        console.log(age);
    }
}


let person = new Person("Manoel");

console.log(person.sayName());
console.log(Person.printAge(15));



