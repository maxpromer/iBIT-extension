from machine import Pin, PWM, I2C

class Motor:
    def __init__(self, dir, pwm, forward_logic):
        self.DIR = Pin(dir, Pin.OUT)
        self.PWM = PWM(Pin(pwm, Pin.OUT), freq=1000, duty=0)
        self.PWM.deinit()
        self.PWM.init()
        self.PWM.duty(0)
        self.forward_logic = forward_logic

    def set(self, speed):
        self.DIR.value(self.forward_logic if speed > 0 else (1 - self.forward_logic))
        if speed < 0:
            speed = -speed
        speed = min(speed, 100)
        self.PWM.duty(int(speed / 100.0 * 1023.0))

M1 = Motor(18, 19, 1)
M2 = Motor(23, 2, 0)

class Servo:
    def __init__(self, pin):
        self.pin = PWM(Pin(pin, Pin.OUT), freq=50, duty=0)
        self.pin.deinit()
        self.pin.init()
        self.pin.freq(50)
        self.pin.duty(0)
    
    def angle(self, value):
        self.pin.duty(int(25.57 + ((value / 180.0) * 102.3)))

    def stop(self):
        self.pin.duty(0)

SV1 = Servo(4)
SV2 = Servo(15)

ADS7828_ADDR = 0x4A

def ADC(ch):
    i2c = I2C(0, scl=Pin(21), sda=Pin(22), freq=100000)
    i2c.writeto(ADS7828_ADDR, bytes([ ((0, 4, 1, 5, 2, 6, 3, 7)[ch] << 4) | 0x8C ])) # PD=0b11, SD=0b1
    h, l = i2c.readfrom(ADS7828_ADDR, 2)
    return ((h << 8) | l) & 0x0FFF
