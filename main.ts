/**
 * 1 - SECOUER
 * 
 * 2 - INCLINER A GAUCHE
 * 
 * 3 - INCLINER A DROITE
 */
input.onGesture(Gesture.TiltRight, function () {
    if (EN_COURS_DE_VERIFICATION == 0) {
        SAVE_ENTRER(3)
    }
})
function VERIFIER_CODE () {
    correct = 1
    for (let index = 0; index <= CODE_SECRET.length; index++) {
        if (SAISIE_UTILISATEUR[index] != CODE_SECRET[index]) {
            correct = 0
        }
    }
    if (correct == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        SAISIE_UTILISATEUR = []
        basic.pause(5000)
        basic.clearScreen()
        EN_COURS_DE_VERIFICATION = 0
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    if (EN_COURS_DE_VERIFICATION == 0) {
        SAVE_ENTRER(2)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (EN_COURS_DE_VERIFICATION == 0) {
        SAVE_ENTRER(1)
    }
})
function SAVE_ENTRER (CODE: number) {
    music.play(music.stringPlayable("F A B - - - - - ", 500), music.PlaybackMode.UntilDone)
    SAISIE_UTILISATEUR.push(CODE)
    if (SAISIE_UTILISATEUR.length >= 3) {
        EN_COURS_DE_VERIFICATION = 1
        VERIFIER_CODE()
    }
}
let correct = 0
let SAISIE_UTILISATEUR: number[] = []
let CODE_SECRET: number[] = []
let EN_COURS_DE_VERIFICATION = 0
EN_COURS_DE_VERIFICATION = 0
CODE_SECRET = [1, 2, 3]
SAISIE_UTILISATEUR = []
