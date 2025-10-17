export const f = () => {
  console.log("f함수 호출");

  const sum = (i, j) => i + j;
  const minus = (i, j) => i - j;
  const mul = (i, j) => i * j;
  const div = (i, j) => i / j;
  return { sum, minus, mul, div };
};
