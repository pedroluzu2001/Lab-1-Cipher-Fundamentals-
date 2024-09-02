# Lab-1 Cipher Fundamental
This lab introduces fundamental principles of cryptography, covering key concepts such as Base-64, hexadecimal, basic operators (AND, OR, X-OR), the modulus operator, bit rotation (Rotate Right and Rotate Left), and prime numbers. It also includes puzzle-solving exercises to develop cipher-cracking skills. 

**A Introduction **

Prime Numbers Definition
A prime number can be defined as a natural number greater than 1 whose only factors are 1 and the number itself. 
A prime number is a positive integer greater than 1 that cannot be written as a product of two distinct integers which are greater than 1.

![image](https://github.com/user-attachments/assets/a3bb2248-0ce0-4997-a7d2-ac120cd04e1f)


A.1: Test for the following prime numbers:

**¿Es primo?**  
   - 91: [ ] Sí [X] No  
   - 421: [X] Sí [ ] No  
   - 1449: [ ] Sí [X] No  

2. **GCD (Máximo Común Divisor)**  
   - 88, 46:  
   - 105, 35:  

3. **Conversión a Base-64 y Hex**  
   - "Hello":  
   - "hello":  
   - "HELLO":  

4. **Decodificación de formatos ASCII**  
   - bGxveWRz:  
   - 6E6170696572:  
   - 01000001 01101110 01101011 01101100 01100101 00110001 00110010 00110011:  

5. **Python: Operador módulo**  
   - ¿Cuál es el resultado de `53431 % 453`?  

6. **Operadores en Python**  
   - `print(0x43 | 0x21)`  
   - `print(0x43 & 0x21)`  
   - `print(0x43 ^ 0x21)`  
   - Usa papel y lápiz para demostrar que los resultados son correctos.

7. **Equivalentes en Python**  
   - Valor: 93  
   - Decimal:  
   - Binario:  
   - Hexadecimal:  
   - Octal:  
   - Caracter:  

8. **JavaScript: Operaciones con node.js**  
   - Realiza las mismas conversiones en un archivo `a_08.js` y ejecuta el script con `node a_08.js`.  
   - Binario:  
   - Hexadecimal:  
   - Octal:  
   - Caracter:  

9. **Python: Conversión a Base-64**  
   - "crypto":  

10. **Comparación de conversiones Base-64**  
    - Observa la diferencia al usar la cadena "crypto1".  

11. **Desplazamientos de bits en Python**  
    - Valor decimal: 41  
    - Desplazamiento a la izquierda (1 bit):  
    - Desplazamiento a la izquierda (2 bits):  
    - Desplazamiento a la derecha (1 bit):  
    - Desplazamiento a la derecha (2 bits):  
    - ¿Por qué no se usaría un operador de desplazamiento solo en criptografía?

12. **Factorización en Python**  
    - Factoriza 432:  
    - Piensa en dos números grandes y determina sus factores.

13. **Compresión y cifrado en node.js**  
    - Crea un archivo `a_13.js` y prueba las conversiones dadas.  
    - ¿Qué observas al comprimir una cadena repetida versus una aleatoria?

### B. Máximo Común Divisor (GCD)

1. **Programa en Python para determinar el GCD**  
   - 4105 y 10:  
   - 4539 y 6:  

2. **Determinación de números coprimos**  
   - 5435 y 634: [ ] Sí [ ] No  
   - 5432 y 634: [ ] Sí [ ] No  

### C. Módulo y Exponenciación

1. **Resultado de las siguientes operaciones**  
   - \( 8^{13} \mod 271 \):  
   - \( 12^{23} \mod 973 \):  

2. **Implementación en Python**  
   - Programa para calcular \( M^e \mod p \).  
   - Verifica si \( 8^5 \mod 269 = 219 \).

3. **Prueba de operaciones**  
   - Mensaje = 5, e = 5, p = 53. Respuesta: 51  
   - Mensaje = 4, e = 11, p = 79. Respuesta: 36  
   - Mensaje = 101, e = 7, p = 293. Respuesta: 176  

### D. Prueba de números primos

1. **Determinación de números primos hasta 100**  
   - Primos:

2. **Implementación de un programa para encontrar primos hasta 1000**  
   - El número primo más alto encontrado:

3. **Implementación del código de tamiz**  
   - Hasta 100:  
   - Hasta 1,000:  
   - Hasta 5,000:  
   - Hasta 10,000:  

4. **Prueba de primalidad Miller-Rabin**  
   - ¿Es 5 primo? [ ] Sí [ ] No  
   - ¿Es 7919 primo? [ ] Sí [ ] No  
   - ¿Es 858,599,509 primo? [ ] Sí [ ] No  
   - ¿Es 982,451,653 primo? [ ] Sí [ ] No  
   - ¿Es 982,451,652 primo? [ ] Sí [ ] No  

### E. Números aleatorios

1. **Secuencia de números aleatorios con Python**  
   - a=21, seed=35, c=31, m=100  
   - ¿La secuencia es correcta? [ ] Sí [ ] No

2. **Secuencia con diferentes parámetros**  
   - a=22, seed=35, c=31, m=100  
   - Primeros cuatro números:  

3. **Secuencia con grandes valores**  
   - a=954,365,343, seed=436,241, c=55,119,927, m=1,000,000  
   - Primeros cuatro números:  

4. **Otra secuencia con grandes valores**  
   - a=2,175,143, seed=3553, c=10,653, m=1,000,000  
   - Primeros cuatro números:  

5. **Xoroshiro128+ en Python**  
   - Realiza 500 lanzamientos de moneda y muestra que el programa no está sesgado hacia "Heads" o "Tails".

### F. Rompiendo el cifrado de desplazamiento

1. **Ataque de fuerza bruta**  
   - Desencripta el siguiente texto cifrado: `ymnx nx ymj ktwjxy uwnrjafq`

2. **Automatización de un ataque de fuerza bruta**  
   - Escribe un código para automatizar el ataque de fuerza bruta.

### G. Rompiendo el cifrado de sustitución monoalfabético

1. **Análisis de frecuencia**  
   - Calcula la frecuencia relativa de todas las letras A...Z en el texto cifrado dado.
   - Desencripta el texto usando el análisis de frecuencia de letras.

## Notas

- Si estás utilizando Python 3, recuerda agregar paréntesis en las declaraciones `print`.

## Recursos
