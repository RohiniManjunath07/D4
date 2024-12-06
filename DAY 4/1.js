const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const firstNPrimes = (n) => {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
};
const printSquareOfPrimes = (n) => {
    const primes = firstNPrimes(n);
    primes.forEach(prime => {
        console.log(`Square of ${prime} is ${prime * prime}`);
    });
};
printSquareOfPrimes(10);
