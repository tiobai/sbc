const gpio = require('gpio');
const { delay } = require('time');

function main() {
    setInterval(() => {
        const valor = gpio.digitalRead(1);
        if (valor > 0) {
            gpio.customWrite(0, 1);
        } else {
            gpio.customWrite(0, 0);
            delay(500);
        }
    }, 1000); // Llama a la función cada segundo
}

if (require.main === module) {
    main();
}

