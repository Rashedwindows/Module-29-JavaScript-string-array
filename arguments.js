// 2ta parameter niye o tar moddhe ektadhik value k + - * / korar jonno arguments use kora hoy.....

function addNumber(num1, num2) {

    let result = 0;

    for (const num of arguments) {

        result = result + num;
    }

    return result;
}

const sum = addNumber(23, 13, 50, 100, 420, 200, 390, 500);

console.log(sum)

