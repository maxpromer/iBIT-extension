from machine import Pin, PWM, I2C

class Motor:
    def __init__(self, dir, pwm):
        self.DIR = Pin(pin1)
        self.PWM = PWM(Pin(pin2), freq=1000)

    def set(speed):
        self.DIR.value(1 if speed > 0 else 0)
        if speed < 0:
            speed = -speed
        self.PWM.duty(int(speed / 100.0 * 1023.0))

M1 = Motor(18, 19)
M2 = Motor(23, 2)

class Servo:
    def __init__(self, pin):
        self.pin = PWM(Pin(pin), freq=50)
    
    def angle(value):
        self.pin.duty(int(25.57 + ((value / 180.0) * 102.3)))

SV1 = Servo()
SV2 = Servo()

ADS7828_ADDR = 0x48

def ADC(ch):
    i2c = I2C(0, scl=Pin(22), sda=Pin(21), freq=100000)
    i2c.writeto(ADS7828_ADDR, bytes([ ((0, 4, 1, 5, 2, 6, 3, 7)[ch] << 4) | 0x8C ])) # PD=0b11, SD=0b1
    h, l = i2c.readfrom(ADS7828_ADDR, 2)
    return (h << 8) | l
