// //1
// let arr0 = [1.5,"useless text","another useless text",true,NaN,undefined];
// function f(arr) {
//     for(let i = 0;i < arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// f(arr0);
// //2
// let arr1 = [];
// function f1() {
//     for(let i = 0;i < 10;i++)
//     {
//         arr1[i] = Math.random();
//     }
// }
// f1();
// f(arr1);
// //3
// function f(a1,a2,a3) {
//     if(a1<a2 && a1<a3)
//     {
//         console.log(a1);
//         return a1;
//     }
//     else if(a2<a1 && a2<a3)
//     {
//         console.log(a2);
//         return a2;
//     }
//     else{
//         console.log(a3);
//         return a3;
//     }
// }
// let a=3,b=6,c=56;
// f(a,b,c);
//5
let arr1 = [45,67,45,76,52,74,234,52,77534,244];
function f(arr) {
    let a=0;
    for(let i = 0;i<arr.length-1;i++)
    {
        if(arr[i]<arr[i+1]) {
            a = arr[i];
        }
    }
    return a;
}
let b = f(arr1);
console.log(b);
