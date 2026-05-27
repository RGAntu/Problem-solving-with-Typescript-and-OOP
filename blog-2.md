# Title: How Generics help us write Reusable and type-safe code in typescript

## Introduction

Generics help us create reusable functions, interfaces, and components without losing type
safety. In this blog I will explain Generics in a simple way with examples.

# What are Generics?

Generics allow us to write code that works with different types of data. Instead of writing
the same code again and again, we can write one reusable function.

# Problem without Generics

Suppose we want a function that returns a value.

## For string

```ts
function getString(value: string): string {
  return value;
}
```

## For number

```ts
function getNumber(value: number): number {
  return value;
}
```

## For boolean

```ts
function getBoolean(value: boolean): boolean {
  return value;
}
```

We are repeating almost the same code.

# Using Generics

```ts
const getValue = <T>(value: T): T {
    return value;
}
```

Here T is a generic type. It works like a placeholder

# Example usage

```ts
const name = getValue<string>("Antu");
const age = getValue<number>(23);
const isNextLevelStudent = getValue<boolean>(true);
```

One function can now work with many types. This makes code reusable, clean, and type-safe.

# Why Generics are useful

## 1. Reusable code

We do not need multiple functions for multiple types.

## 2. Type Safety

Typescript still knows the correct type.

```ts
const result = getValue<string>("Antu");
result.toUpperCase();
```

Typescript understands result is a string.

## 3. Better Developer Experience

Generics help with autocomplete, error checking, and cleaner code.

# Generics with Arrays

```ts
const getFirstElement = <T>(arr: T[]): T[
    return arr[0];
]

const firstNumber = getFirstElement([1,2,3]);
const firstString = getFirstElement([ "Generics", "Types", "Array"]);
const firstBoolean = getFirstElement([true, false, false]);

```

Typescript automatically understands the types.

# Generics with interfaces

We can also use Generics in interfaces.

```ts
interface User<T>{
        data: T;
        isStudent: boolean;

}

const user: User<string>{
    data: "Antu",
    isStudent: true,
}
```

## Conclusion

Generics are one of the most powerful features in Typescript.They help us write reusable
code, keep strong type safety and reduce duplicate code.
