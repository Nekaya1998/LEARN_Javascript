/**
 * classes provide the blueprint for creating objects
 * A class defines what properties and methods an object has.
 * 
 * classes use constructors for unique properties
 */

class Player{
    score = 0;

    pause(){
        console.log("you paused the game")
    }
    exit(){
        console.log("you left the game")
    }
}

//to create an object use the new keyword and invoke a call on the class object
const PLAYER1 = new Player();

console.log(PLAYER1.score);
PLAYER1.exit();

/**
 * Contructors are a special method of a class that
 * accepts arguments and assigns properties
 * 
 * static keyword belongs to a class and not the objects.
 * static properties: useful for caches, fixed-configs
 * static methods: useful for utility functions
 */

class Student{
    //how many times has a new student been created
    static numberOfStudents = 0;

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa

        //because this belongs to the class, use the class
        Student.numberOfStudents ++;
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

const STUDENT1 = new Student("Nekaya", 24, 3.1);
const STUDENT2 = new Student("kay", 24, 3.1);
const STUDENT3 = new Student("kaya", 24, 3.1);


console.log(STUDENT1)
STUDENT1.study()

//console log the static property
console.log(Student.numberOfStudents);

/**
 * Inheritance is when the child class can inherit all of the methods
 * and properties of the parent class
 * 
 * Super keyword refers to the parent class
 * commonly used to invoke constructor of a parent class
 */

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    alive = true;
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }

}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed;
    }

    name="rabbit";

    run(){
        console.log(`${this.name} is running`)
    }
}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed;
    }

    name = "fish";

    swim(){
        console.log(`${this.name} is swimming`)
    }
}

class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed;
    }

    name = "hawk";

    fly(){
        console.log(`${this.name} is flying`)
    }
}

const rabbit = new Rabbit("rabbit", 2, 50);
const fish = new Fish();
const hawk = new Hawk();

rabbit.run();
fish.swim();
console.log(hawk.alive);

console.log(rabbit)