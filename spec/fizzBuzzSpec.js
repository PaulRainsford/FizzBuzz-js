describe('FizzBuzz', function() {
  let fizzBuzz;

   beforeEach(function() {
     fizzBuzz = new FizzBuzz();
   });

   describe('knows when a number is', function() {
     it('divisble by 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
   });
   

   describe('knows when a number is', function() {
       it('divisble by 5', function() {
         expect(fizzBuzz.play(5)).toEqual('Buzz');
       });
   });
    
    describe('knows when a number is', function() {
        it('divisble by 15', function() {
            expect(fizzBuzz.play(30)).toEqual('Fizzbuzz');
        });
    });

    describe('all other numbers', function() {
        it('knows 1 is 1', function() {
            expect(fizzBuzz.play(1)).toEqual(1);
        });
    });
    
});