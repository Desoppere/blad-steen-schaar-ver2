function welkeKnop () {
    if (input.buttonIsPressed(Button.AB) || (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(200)
    } else {
        welkeKnop()
    }
}
function opstartscherm () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        # . # # #
        . # . . .
        # . # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
}
opstartscherm()
let Aknop = 0
let Bknop = 0
let ABknop = 0
basic.forever(function () {
	
})
