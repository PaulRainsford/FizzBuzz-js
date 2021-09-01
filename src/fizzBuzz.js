class FizzBuzz {

    _isDivisbleBy(divisor, number) {
        return number % divisor === 0;
    }

    play(number) {
      if (this._isDivisbleBy(15, number)) {
        return 'Fizzbuzz';
    } else if (this._isDivisbleBy(5, number)) {
        return 'Buzz';
    } else if (this._isDivisbleBy(3, number)) {
        return 'Fizz';
    } else {
        return number;
    }
 }
}


let fizzBuzz = new FizzBuzz();

for (let i =1; i <= 100; i++) {
    console.log(fizzBuzz.play(i));
}