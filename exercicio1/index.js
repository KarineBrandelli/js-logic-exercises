function hashtagStaircase(n) {
  let staircase = "";

  if (n < 1 || n > 10) {
    console.log(
      `O valor inserido (${n}) não está dentro do intervalo permitido (1 ≤ n ≤ 10).`
    );
    return;
  }

  for (let i = 1; i <= n; i++) {
    staircase += " ".repeat(n - i) + "#".repeat(i) + "\n";
  }
  console.log(staircase);
}

hashtagStaircase(0);
console.log("Input n = 4:") + hashtagStaircase(4);
console.log("Input n = 5:") + hashtagStaircase(5);
console.log("Input n = 7:") + hashtagStaircase(7);
hashtagStaircase(11);
