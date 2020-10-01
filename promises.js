// const f1 = () => Promise.resolve("f1:done");
// const f2 = (input) => Promise.resolve("f2:done after " + input);
// const f3 = (input) => Promise.resolve("f3:done after " + input);

const f1 = () => of("f1:done");
const f2 = (input) => of("f2:done after " + input);
const f3 = (input) => of("f3:done after " + input);


// 1.
// f1() -> f2(res1) -> f3(res2) -> res3 ----------------> solution


// 2.
// f1() ----res1--> f3(res1) ---------------------------> solution
//      -x--err1--> f2(err1) --res2--> f3(res2) --------> solution



















