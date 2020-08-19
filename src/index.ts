class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const komdori = new Human("Camille", 27, "male");

const candice = {
  name: "Jeeyoung",
  gender: "female",
  age: 27,
};

const sayHi = (anyone: Human): string => {
  return `Hello ${anyone.name}. You are ${anyone.age}, and you are a ${anyone.gender}!`;
};

console.log(sayHi(komdori));

export {};
