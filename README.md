# Lab-1 Cipher Fundamental
This lab introduces fundamental principles of cryptography, covering key concepts such as Base-64, hexadecimal, basic operators (AND, OR, X-OR), the modulus operator, bit rotation (Rotate Right and Rotate Left), and prime numbers. It also includes puzzle-solving exercises to develop cipher-cracking skills. 

**A._Introduction**

Prime Numbers Definition
A prime number can be defined as a natural number greater than 1 whose only factors are 1 and the number itself. 
A prime number is a positive integer greater than 1 that cannot be written as a product of two distinct integers which are greater than 1.

![image](https://github.com/user-attachments/assets/a3bb2248-0ce0-4997-a7d2-ac120cd04e1f)


## Prime Numbers

- **91**: Not Prime
- **421**: Prime
- **1449**: Not Prime

## GCD (Greatest Common Divisor)

- GCD of 88 and 46: **2**
- GCD of 105 and 35: **35**

## Base-64 and Hexadecimal Conversions

- **"Hello"**: Base-64: `SGVsbG8=`, Hex: `48656C6C6F`
- **"hello"**: Base-64: `aGVsbG8=`, Hex: `68656C6C6F`
- **"HELLO"**: Base-64: `SEVMTE8=`, Hex: `48454C4C4F`

## ASCII Decoding

- **bGxveWRz**: `lloyds`
- **6E6170696572**: `napier`
- **01000001 01101110 01101011 01101100 01100101 00110001 00110010 00110011**: `Ankle123`

## Python Modulo Operator

- Result of `53431 % 453`: **430**

## Bitwise Operations in Python

- `print(0x43 | 0x21)`: **99**
- `print(0x43 & 0x21)`: **1**
- `print(0x43 ^ 0x21)`: **98**

## Python Value Equivalents

- **Value**: 93
  - **Decimal**: 93
  - **Binary**: ` 0b1011101`
  - **Hexadecimal**: `0x5d`
  - **Octal**: `0o135`
  - **Character**: `]`

## JavaScript Node.js Operations

- Perform the same conversions in a file named `a_08.js` and execute the script using `node a_08.js`.
  - **Binary**: `1011101`
  - **Hexadecimal**: `5d`
  - **Octal**: `135`
  - **Character**: `]`

## Base-64 Conversion in Python

- **"crypto"**: `Y3J5cHRv`
- **"cripto1"**: `Y3J5cHRvMQ==`

## Bitwise Shifts in Python

- **Decimal Value**: 41
  - Left Shift (1 bit): `82`
  - Left Shift (2 bits): `164`
  - Right Shift (1 bit): `20`
  - Right Shift (2 bits): `10`
  - **Why not use shift operators in cryptography?**
    - Shifts can introduce predictability, making cryptographic operations vulnerable to attacks.

## Factorization in Python

- Factorize 432: `2, 2, 2, 2, 3, 3, 3`
- Factorize two large numbers: `10000000 = 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5`
- Factorize two large numbers: `2192029103923 = 61, 311, 4049, 28537`
  

## Compression and Encryption in Node.js

- Create a file `a_13.js` and test the given conversions.
- eJzzyc9Lyc8DAAgpAms= : London
- eJxzSi3KycwDAAfXAl0= : Berlin
- eJzzSy1XiMwvygYADKUC8A== : New York
  - **Observation**: Compressed repeated strings tend to be smaller compared to random strings due to redundancy.

## GCD Calculation

- Python program to determine the GCD:
  - 4105 and 10: `5`
  - 4539 and 6: `3`
 
  - 5435 and 634 are coprime.
  - 5432 and 634 are not coprime.

## Modular Exponentiation

- Result of \( 8^{13} \mod 271 \): `119`
- Result of \( 12^{23} \mod 973 \): `514`
- Implement a program in Python to calculate \( M^e \mod p \) and verify the results.
  - \( 8^5 \mod 269 = 219 \): `True`

 ## Cipher Calculation Proof

Have you proven the following answers?

1. **(a) message = 5, e = 5, p = 53. Expected Answer: 51**
   - Proven: Yes

2. **(b) message = 4, e = 11, p = 79. Expected Answer: 36**
   - Proven: Yes

3. **(c) message = 101, e = 7, p = 293. Expected Answer: 176**
   - Proven: Yes

## Prime Number Testing

- **Prime numbers up to 100**: `[5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107, 113, 131, 137, 149, 167, 173, 179, 191, 197, 227, 233, 239, 251, 257, 263, 269, 281, 293, 311, 317, 347, 353, 359, 383, 389, 401, 419, 431, 443, 449, 461, 467, 479, 491, 503, 509, 521, 557, 563, 569, 587, 593]`
- Implement a program to find primes up to 1000.
  - Highest prime found: `997
Implement the given Python code and determine the highest prime number possible in the following ranges:

1. **Up to 100:**
   - Highest prime: 97

2. **Up to 1,000:**
   - Highest prime:997 

3. **Up to 5,000:**
   - Highest prime: 4999

4. **Up to 10,000:**
   - Highest prime: 9973

 *Using the Miller-Rabin Test, determine whether the following numbers are prime:*

1. **Is 5 prime?** Yes
2. **Is 7919 prime?** Yes
3. **Is 858,599,509 prime?** Yes
4. **Is 982,451,653 prime?** Yes
5. **Is 982,451,652 prime?** No

## E.1 Sequence Generation Check

**Question:** Implement the Linear Congruential Generator (LCG) using the following parameters:  
- `a = 21`
- `seed = 35`
- `c = 31`
- `m = 100`

Does it generate the sequence: 66, 17, 88, 79, 90?

**Answer:** Yes


## E.2 Sequence Generation with New Parameters

**Question:** Determine the sequence using the parameters:  
- `a = 22`
- `seed = 35`
- `c = 31`
- `m = 100`

What is the generated sequence?
[66, 17, 88, 79]

## E.3 First Four Numbers of the Sequence

**Question:** Determine the first four numbers of the sequence using the parameters:  
- `a = 954,365,343`
- `seed = 436,241`
- `c = 55,119,927`
- `m = 1,000,000`

What are the first four numbers of the sequence?
31904, 339313, 65600, 937041


## E.4 First Four Numbers of Another Sequence

**Question:** Determine the first four numbers of the sequence using the parameters:  
- `a = 2,175,143`
- `seed = 3553`
- `c = 10,653`
- `m = 1,000,000`

What are the first four numbers of the sequence?
293732, 114329, 934700, 172753



## Breaking Ciphers

- **Brute-force Attack**: Decrypt the following cipher text: `ymnx nx ymj ktwjxy uwnrjafq`
- **Automate Brute-force Attack**: Write code to automate the decryption process.

## Breaking Monoalphabetic Substitution Cipher

- **Frequency Analysis**: Calculate the relative frequency of all letters A...Z in the given cipher text.
  - Decrypt the text using frequency analysis.
