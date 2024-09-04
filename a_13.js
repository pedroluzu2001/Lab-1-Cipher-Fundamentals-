const zlib = require('zlib');

// Cadena de prueba y bandera predeterminadas
let test = "eJzzyc9Lyc8DAAgpAms=";
let flag = "unzip";

// Capturar los argumentos de la línea de comandos
const args = process.argv;
if (args.length > 2) test = args[2];
if (args.length > 3) flag = args[3];

console.log("Input (Base64):", test);

if (flag === "zip") {
    const input = Buffer.from(test);

    zlib.deflate(input, (err, buf) => {
        if (err) {
            console.error("Error during compression:", err);
            return;
        }
        const res = buf.toString('base64');
        console.log("Compressed (Base64):", res);
    });

} else {
    const input = Buffer.from(test, 'base64');

    zlib.inflate(input, (err, buf) => {
        if (err) {
            console.error("Incorrect format in processing Base64:", err);
            return;
        }
        console.log("Uncompressed:", buf.toString("utf8"));
    });
}
