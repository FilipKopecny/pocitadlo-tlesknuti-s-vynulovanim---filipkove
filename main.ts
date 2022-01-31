input.onButtonPressed(Button.A, function () {
    plusminus = 10
})
input.onGesture(Gesture.Shake, function () {
    pocitadlo = 0
})
input.onButtonPressed(Button.B, function () {
    plusminus = -10
})
input.onSound(DetectedSound.Loud, function () {
    pocitadlo += plusminus
})
let plusminus = 0
let pocitadlo = 0
pocitadlo = 400
plusminus = 10
basic.forever(function () {
    basic.showNumber(pocitadlo)
})
