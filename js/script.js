
let message;
for (let i = 1; i <= 100; i++) {

    message = i;

    if (i % 3 === 0) {

        message = "Fizz";
    } else if (i % 5 === 0) {

        message = "Buzz";
    }

    if ((i % 5 === 0) && (i % 3 === 0)) {
        message = "FizzBuzz";
    }

    console.log(message)
}







