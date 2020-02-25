# Se utiliza Circuitpython para esto
# Se importa la librería que asigna los pines GPIO
import board
# Se importa la librería que controla el protocolo SPI
import busio
# Se importa la librería que controla los pines GPIO
import digitalio
# Se importa la librería de adafruit para el controlador de la RTC
import adafruit_max31865

# Se asignan los pines encargados del protocolo SPI
spi = busio.SPI(board.SCK, MOSI=board.MOSI, MISO=board.MISO)
# Se selecciona el pin donde está conectado el sensor o plata MAX31865
# En este caso se asigna el pin 5
cs = digitalio.DigitalInOut(board.D5)
# Se llama a la librería MAX31865 asignandole los pines spi, cs
# e indicandole que es una PT100 y de 3 cables
sensor = adafruit_max31865.MAX31865(spi, cs, rtd_nominal=100.0, wires=3)


def leertemp():
    # Lee la temperatura
    temp = str(sensor.temperature)
    return temp
