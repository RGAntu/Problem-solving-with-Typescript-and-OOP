const filterEvenNumbers = (numbers: number[]): number[] => {
  let evenNumbers: number[] = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
};


const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};


type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string | undefined => {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
};



const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & {isRead: boolean} => {
  const newBook = { ...book, isRead: true };
  return newBook;
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const elements = arr1.filter((element) => arr2.includes(element));
  return elements;
};


