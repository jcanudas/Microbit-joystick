radio.setGroup(1)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 100) {
        radio.sendString("Dreta")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendString("Esquerra")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 100) {
        radio.sendString("Avall")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendString("Amunt")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendString("C")
        basic.showString("C")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendString("D")
        basic.showString("D")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendString("E")
        basic.showString("E")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendString("F")
        basic.showString("F")
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
        basic.showString("A")
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
        basic.showString("B")
    }
})
