function welkeKnop () {
    if (input.buttonIsPressed(Button.AB) || (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(200)
        if (input.buttonIsPressed(Button.AB)) {
            ABknop = 1
        } else {
            if (input.buttonIsPressed(Button.A)) {
                Aknop = 1
            }
            Bknop = 1
        }
    } else {
    	
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
let ABknop = 0
let Bknop = 0
let Aknop = 0
opstartscherm()
Aknop = 0
Bknop = 0
ABknop = 0
basic.forever(function () {
    welkeKnop()
    basic.showNumber(ABknop)
})
