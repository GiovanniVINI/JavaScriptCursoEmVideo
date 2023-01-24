let num = [8, 1, 7, 4, 2, 9]
num.sort()
console.log(num)
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/

/*
for(let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)  
} 
*/

for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}