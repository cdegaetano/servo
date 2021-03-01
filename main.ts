input.onButtonPressed(Button.A, function () {
    if (angle <= 180) {
        servos.P0.setAngle(angle)
        angle += 10
    }
})
let angle = 0
angle = 0
