function hashtagPyramid(n) {
  let pyramid = "";

  if (n < 1 || n > 10) {
    console.log(
      `O valor inserido (${n}) não está dentro do intervalo permitido (1 ≤ n ≤ 10).`
    );
    return;
  }

  for (let i = 1; i <= n; i++) {
    pyramid += " ".repeat(n - i) + "#".repeat(i * 2 - 1) + "\n";
  }
  console.log(pyramid);
}

hashtagPyramid(0);
console.log("Input n = 5:") + hashtagPyramid(5);
console.log("Input n = 7:") + hashtagPyramid(7);
console.log("Input n = 8:") + hashtagPyramid(8);
hashtagPyramid(11);
