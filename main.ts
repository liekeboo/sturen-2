radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.clearScreen()
        motor.motorStopAll()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (receivedNumber == 2) {
        basic.clearScreen()
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, speed)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, speed)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 3) {
        basic.clearScreen()
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, speed)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, speed)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (receivedNumber == 4) {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (receivedNumber == 5) {
        basic.clearScreen()
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, speed)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, speed)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
let speed = 0
radio.setGroup(1)
speed = 300
