function showMessage() {
    alert("this message is in a function");
}
showMessage();

function sum(a, b) {
    return a + b;
}
console.log(sum(25, 5));

function toCelsius(f) {
    return (f - 32) * (5/9);
}
console.log("54 f is " + toCelsius(54) + " celsius.");

var result = toCelsius(54);
console.log("The result is: "+result+" celsius.");

function dsFunction() {
    var localVar = "Digital School";
    alert(localVar);
}
dsFunction();

function toSeconds(minutes) {
    return minutes * 60;
}
console.log(toSeconds(60));

function triangleArea(base, height) {
    return 0.5 * base * height;
}
console.log(triangleArea(5, 7));

var car = {
    name: "Mercedes",
    color: "red",
    year: 2020,
    kilometers: 0,
    startEngine: function() {
        alert("vroom");
    },
    get getKilometers() {
        return this.kilometers;
    },
    set setKilometers(km) {
        this.kilometers = km;
    }
};

console.log(car.getKilometers);

car.setKilometers = 100;
console.log(car.getKilometers);

var school = {
    name: "Digital School",
    subject: "Programming",
    students: 1500,
    year: 2016
};

alert(car.name);

alert(car['color']);

car.startEngine();

var computer = new Object();
computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";

computer.type= function() {
    return this.name + "," + this.CPU + " , " + this.RAM + " , " + this.GPU;
}

alert(computer.GPU);
alert(computer.type());

delete computer.GPU;
alert(computer.GPU);

function Computer(name, CPU, RAM, GPU) {
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("Lenovo", "Intel core i7", "16GB", "GeForce GT730 2GB Dual DP HP");
var computer2 = new Computer("HP", "Intel core i5", "8GB", "GeForce GT730 2GB Dual DP HP");