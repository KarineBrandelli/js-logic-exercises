function sumAllNumbers(n) {
  let sum = 0;

  if (n < 1 || n > 100) {
    console.log(
      `O valor inserido (${n}) não está dentro do intervalo permitido (1 ≤ n ≤ 100).`
    );
    return;
  }

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return `A soma de todos os números inteiros positivos menores ou iguais a ${n} é ${sum}.`;
}

sumAllNumbers(0);
console.log(`Test case 1: ${sumAllNumbers(5)}`);
console.log(`Test case 2: ${sumAllNumbers(7)}`);
console.log(`Test case 3: ${sumAllNumbers(8)}`);
sumAllNumbers(101);
