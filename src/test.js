const good_array = (myarray) => {
  let newarray = [myarray[0]];
  let n = 0;
  let m = 0;

  while (n < myarray.length) {
    let current = myarray[n];
    if (current !== newarray[m]) {
      newarray.push(current);
      m += 1;
    }
    n += 1;
  }

  return newarray.join("");
};

let resp = good_array([
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "a",
  "a",
  "c",
  "b",
]);

console.log(resp);
