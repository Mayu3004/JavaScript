//named export
//
// export const add = (a,b)=>a+b;
// export const sub = (a,b)=>a-b;
// export const pow = (a,b)=>a**b;

//default export
//can be used only once in file
const add = (a,b)=>a+b;
const sub = (a,b)=>a-b;
const pow = (a,b)=>a**b;

export default {
    add,
    pow,
    sub
}