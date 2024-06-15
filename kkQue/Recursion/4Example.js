const nto1 = (n) => {
  if (n == 0) return;
  console.log(n);
  nto1(n - 1);
};

nto1(5);

const onetoN = (n) => {
  if (n == 0) return;
  onetoN(n - 1);
  console.log(n);
};

onetoN(5);
