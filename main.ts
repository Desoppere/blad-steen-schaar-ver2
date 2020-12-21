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
basic.forever(function () {
	
})
