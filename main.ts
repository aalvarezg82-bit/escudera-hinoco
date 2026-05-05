let tiempo = 0
OLED.init(128, 64)
OLED.clear()
let temperatura_inicial = Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
let temperatura_objetivo = temperatura_inicial - 2
OLED.writeString("temperatura inicial")
OLED.writeNum(temperatura_inicial)
OLED.newLine()
OLED.writeString("temperatura objetivo")
OLED.writeNum(temperatura_objetivo)
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    let terminado = false
    if (terminado == false) {
        tiempo = 0.1
    }
})
