// The observables styles
// const f1 = () => of("f1:done");
// const f2 = (input) => of(input + "then f2:done");
// const f3 = (input) => of(input + "then f3:done");

// The promise, async/await style
const f1 = () => Promise.resolve("f1:done");
const f2 = (input) => Promise.resolve(input + " then f2:done");
const f3 = (input) => Promise.resolve(input + " then f3:done");



// Question 1.
// f1() ---res1--> f2(res1) ---res2--> f3(res2) ---res3-> solution







// Question 2.
// f1() ----res1---------------------> f3(res1) --------> solution
//      -x--err1--> f2(err1) --res2--> f3(res2) --------> solution
