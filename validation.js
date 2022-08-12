function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please enter a number'
    }
    return num1 + num2
}

const result = add(12, 45);
// console.log(result);

function multply(num1 ,num2){
    console.log(num1, num2);
    return num1 * num2;
}

const output = multply(12, 45);
console.log(output);