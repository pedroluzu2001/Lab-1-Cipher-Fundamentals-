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

- **Prime numbers up to 100**: `[List of primes]`
- Implement a program to find primes up to 1000.
  - Highest prime found: `[Result]`

## Random Number Generation

- Generate a sequence of random numbers with Python:
  - **a=21, seed=35, c=31, m=100**: Is the sequence correct? `[Yes/No]`

## Breaking Ciphers

- **Brute-force Attack**: Decrypt the following cipher text: `ymnx nx ymj ktwjxy uwnrjafq`
- **Automate Brute-force Attack**: Write code to automate the decryption process.

## Breaking Monoalphabetic Substitution Cipher

- **Frequency Analysis**: Calculate the relative frequency of all letters A...Z in the given cipher text.
  - Decrypt the text using frequency analysis.
