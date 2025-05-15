const flag = true;

a = 10;
while (a) {
    console.log(a);
    a--;
}
console.log("while loop ends\n");

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}
console.log("for loop ends\n");

let b = 0;
while (b < 10) {
    if (b == 5) {

        break;
    }
    console.log(b);
    b++;
}