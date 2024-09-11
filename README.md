# Lab 1: Cipher Fundamentals

This lab introduces fundamental principles of cryptography, including Base-64, hexadecimal, bitwise operations, modular arithmetic, and prime numbers. It also covers puzzle-solving exercises to develop cipher-cracking skills.

## A. Introduction

### A.1 Prime Numbers
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. It cannot be written as a product of two distinct integers greater than 1.

![Prime Numbers](https://github.com/user-attachments/assets/a3bb2248-0ce0-4997-a7d2-ac120cd04e1f)

#### A.1.1 Examples:
- **91**: Not Prime
- **421**: Prime
- **1449**: Not Prime

### A.2 GCD (Greatest Common Divisor)
- **GCD of 88 and 46**: 2
- **GCD of 105 and 35**: 35

### A.3 Base-64 and Hexadecimal Conversions
- **"Hello"**:
  - Base-64: `SGVsbG8=`
  - Hex: `48656C6C6F`
- **"hello"**:
  - Base-64: `aGVsbG8=`
  - Hex: `68656C6C6F`
- **"HELLO"**:
  - Base-64: `SEVMTE8=`
  - Hex: `48454C4C4F`

### A.4 ASCII Decoding
- **bGxveWRz**: `lloyds`
- **6E6170696572**: `napier`
- **01000001 01101110 01101011 01101100 01100101 00110001 00110010 00110011**: `Ankle123`

### A.5 Python Modulo Operator
- Result of `53431 % 453`: **430**

### A.6 Bitwise Operations in Python
- `print(0x43 | 0x21)`: **99**
- `print(0x43 & 0x21)`: **1**
- `print(0x43 ^ 0x21)`: **98**

### A.7 Python Value Equivalents
- **Value**: 93
  - **Decimal**: 93
  - **Binary**: `0b1011101`
  - **Hexadecimal**: `0x5d`
  - **Octal**: `0o135`
  - **Character**: `]`

### A.8 JavaScript Node.js Operations
Perform the same conversions in a file named `a_08.js` and execute the script using `node a_08.js`.
  - **Binary**: `1011101`
  - **Hexadecimal**: `5d`
  - **Octal**: `135`
  - **Character**: `]`

### A.9 Base-64 Conversion in Python
- **"crypto"**: `Y3J5cHRv`
- **"cripto1"**: `Y3J5cHRvMQ==`

### A.10 Bitwise Shifts in Python
- **Decimal Value**: 41
  - Left Shift (1 bit): `82`
  - Left Shift (2 bits): `164`
  - Right Shift (1 bit): `20`
  - Right Shift (2 bits): `10`
  - **Why not use shift operators in cryptography?**
    - Shifts can introduce predictability, making cryptographic operations vulnerable to attacks.

### A.11 Factorization in Python
- Factorize 432: `2, 2, 2, 2, 3, 3, 3`
- Factorize two large numbers:
  - `10000000 = 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5`
  - `2192029103923 = 61, 311, 4049, 28537`

## B. Compression and Encryption in Node.js
- Create a file `a_13.js` and test the given conversions.
- Compressed Strings:
  - `eJzzyc9Lyc8DAAgpAms=`: London
  - `eJxzSi3KycwDAAfXAl0=`: Berlin
  - `eJzzSy1XiMwvygYADKUC8A==`: New York
  - **Observation**: Compressed repeated strings tend to be smaller compared to random strings due to redundancy.

## C. GCD Calculation
- Python program results:
  - GCD of 4105 and 10: `5`
  - GCD of 4539 and 6: `3`
  - 5435 and 634 are coprime.
  - 5432 and 634 are not coprime.

## D. Modular Exponentiation
- Results:
  - \( 8^{13} \mod 271 \): `119`
  - \( 12^{23} \mod 973 \): `514`
  - **Python Verification**:
    - \( 8^5 \mod 269 = 219 \): `True`

## E. Cipher Calculation Proof
- **(a)** message = 5, e = 5, p = 53. Expected Answer: 51
  - Proven: Yes
- **(b)** message = 4, e = 11, p = 79. Expected Answer: 36
  - Proven: Yes
- **(c)** message = 101, e = 7, p = 293. Expected Answer: 176
  - Proven: Yes

## F. Prime Number Testing
- **Prime numbers up to 100**: `[5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`
  - **Up to 1,000**: Highest prime: 997
  - **Up to 5,000**: Highest prime: 4999
  - **Up to 10,000**: Highest prime: 9973

- **Miller-Rabin Test**:
  - **Is 5 prime?** Yes
  - **Is 7919 prime?** Yes
  - **Is 858,599,509 prime?** Yes
  - **Is 982,451,653 prime?** Yes
  - **Is 982,451,652 prime?** No

## G. Sequence Generation Check

### G.1 Linear Congruential Generator (LCG)
- Parameters: `a = 21`, `seed = 35`, `c = 31`, `m = 100`
  - **Generated Sequence**: `66, 17, 88, 79, 90`
  - **Does it match the expected sequence?** Yes

### G.2 New Parameters
- Parameters: `a = 22`, `seed = 35`, `c = 31`, `m = 100`
  - **Generated Sequence**: `66, 17, 88, 79`

### G.3 First Four Numbers
- Parameters: `a = 954,365,343`, `seed = 436,241`, `c = 55,119,927`, `m = 1,000,000`
  - **First Four Numbers**: `31904, 339313, 65600, 937041`

### G.4 Another Sequence
- Parameters: `a = 2,175,143`, `seed = 3553`, `c = 10,653`, `m = 1,000,000`
  - **First Four Numbers**: `293732, 114329, 934700, 172753`

## H. Decrypting the Shift Cipher

### H.1 Decrypting with Brute Force
For each ciphertext, try all 26 possible keys (0 to 25) to find which key produces meaningful plaintext.

#### H.1.1 Given Ciphertexts:
- **Ciphertext 1**: `ymnx nx ymj ktwjxy uwnrjafq`
  - **Recovered Plaintext**: `this is the forest primeval`
  - **Key Used**: 5
- **Ciphertext 2**: `esp bflwtej zq xpcnj td yze decltypo`
  - **Recovered Plaintext**: `the quality of mercy is not strained`
  - **Key Used**: 11
- **Ciphertext 3**: `owlzwhwghdwgxlzwmfalwvklslwk`
  - **Recovered Plaintext**: `wethepeopleoftheunitedstates`
  - **Key Used**: 19
- **Ciphertext 4**: `haahjr ha khdu`
  - **Recovered Plaintext**: `attack at dawn`
  - **Key Used**: 7
- **Ciphertext 5**: `wkh srufxslqh lv xqghu wkh vkhhwv`
  - **Recovered Plaintext**: `the porcupine is under the sheets`
  - **Key Used**: 3
- **Ciphertext 6**: `WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ`
  - **Recovered Plaintext**: `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG`
  - **Key Used**: 3


## Breaking Monoalphabetic Substitution Cipher

### Frequency Analysis
- **Objective**:
  1. Compute the relative frequency of all letters (A...Z) in the ciphertext.
  2. Decrypt the ciphertext using the relative letter frequency of the English language.

- **Ciphertext**:
- BECAUSE THE PRACTICE OF THE BASIC MOVEMENTS OF KATA IS THE FOCUS AND MASTERY OF SELF IS THE ESSENCE OF MATSUBAYASHI RYU KARATE DO I SHALL TRY TO ELUCIDATE THE MOVEMENTS OF THE KATA ACCORDING TO MY INTERPRETATION BASED ON FORTY YEARS OF STUDY IT IS NOT AN EASY TASK TO EXPLAIN EACH MOVEMENT AND ITS SIGNIFICANCE AND SOME MUST REMAIN UNEXPLAINED TO GIVE A COMPLETE EXPLANATION ONE WOULD HAVE TO BE QUALIFIED AND INSPIRED TO SUCH AN EXTENT THAT HE COULD REACH THE STATE OF ENLIGHTENED MIND CAPABLE OF RECOGNIZING SOUNDLESS SOUND AND SHAPELESS SHAPE I DO NOT DEEM MYSELF THE FINAL AUTHORITY BUT MY EXPERIENCE WITH KATA HAS LEFT NO DOUBT THAT THE FOLLOWING IS THE PROPER APPLICATION AND INTERPRETATION I OFFER MY THEORIES IN THE HOPE THAT THE ESSENCE OF OKINAWAN KARATE WILL REMAIN INTACT
