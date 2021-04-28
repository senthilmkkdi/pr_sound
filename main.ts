let lights_on = false
input.onSound(DetectedSound.Loud, function () {
    lights_on = !(lights_on)
    if (true) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . # . # .
            . # . # .
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
