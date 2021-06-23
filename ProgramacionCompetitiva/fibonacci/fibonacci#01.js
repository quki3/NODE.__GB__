let a = 1;
let b = 1;

console.log(`${a}`);

for(let i =2; i<=7;i++){
    console.log(`${b}`)
    b=a+b;
    a=b-a;
}
