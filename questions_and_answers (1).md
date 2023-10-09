<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer:A:{}</b></summary>
<p>

#### Answer: ?

<i>greeting variable declare using let keyword.then greeting value is {} . it is not change.</i>
 so print the {}
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer:C:'12'</b></summary>
<p>

#### Answer: ?

<i>Sum is function that take two parameter .This function is defined to accept two parameters, a and b, and returns the sum of these parameters.The sum function is called with 1 and "2" as arguments.1 is a number, and "2" is a string. JavaScript will attempt to convert the number 1 to a string and then concatenate the strings, resulting in "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>food is array.Fist index [0] value replacing in the "🍝".he food array is not modified directly in the code, and only the favoriteFood.so that is not changing array </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer- B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>sayHi function is called without passing any argument .but return `Hi there.so it's print `Hi there but not argument pass .so it is undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>AnswerC: 3</b></summary>
<p>

#### Answer: ?

<i>0 is falsy value so it is not increment count.but 1,2,3 are truthy value then increment count 1.so this result 3</i>

</p>
</details>
