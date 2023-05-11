function printFizzBuzz(n) {
  if (n < 1 || n > 100) {
    console.log(
      `O valor inserido (${n}) não está dentro do intervalo permitido (1 ≤ n ≤ 100).`
    );
    return;
  }

  for (let i = 1; i <= n; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    console.log(
      isMultipleOf3 && isMultipleOf5
        ? "FizzBuzz"
        : isMultipleOf3
        ? "Fizz"
        : isMultipleOf5
        ? "Buzz"
        : i
    );
  }
}

printFizzBuzz(0);
console.log("Input n = 5:") + printFizzBuzz(5) + console.log("");
console.log("Input n = 11:") + printFizzBuzz(11) + console.log("");
console.log("Input n = 15:") + printFizzBuzz(15) + console.log("");
printFizzBuzz(101);
