const btnEncryption = document.querySelector('#btnEncryption')
const btnDecoding = document.querySelector('#btnDecoding')

let char = document.querySelector('#char');
let textArea = document.querySelector('#UserInput');
let textEncryp
let testq = ''
let indexLast
let indexStart
let u


textArea.addEventListener('input', event => {
    event.data != null && (char.value += event.data)

    let newValue = event.target.value

    if (event.inputType === 'insertText') {
        testq = newValue
    }

    if (event.inputType === 'deleteContentBackward') {

        for (let index = 0; index < testq.length; index++) {

            if (testq.charAt([index]) === ' ') {
                indexStart = index
            }

            if (event.target.value.length === testq.search(' ')) {
                console.log(testq.search(' '));
                indexStart = 0
            }

            console.log(indexStart);

            if (newValue[index] !== testq[index]) {
                indexLast = index
                char.value = textArea.value.slice(indexStart, indexLast)
                return true
            }

        }

    }

    if (event.data == ' ') {
        char.value = ''
        char.value += event.data
        testq = ''
    }
})


//Box colors
const caseFilterColor = (colorText, colorBack) => {
    document.querySelector('textarea').style.cssText = `
        color: ${colorText};
        box-shadow: 0px 0 70px ${colorBack} inset, 0 0 70px ${colorBack};
     `
    document.querySelectorAll('.btn-e').forEach(btn => {
        btn.style.cssText = `
            color: ${colorText};
            box-shadow: 0 0 10px ${colorBack} inset;
        `
    })
    document.querySelector('.btn-color-box').style.cssText = `
        color: ${colorText};
        box-shadow: 0 0 10px ${colorBack} inset;
    `
    document.querySelector('.parent-capsLockBtn').style.cssText = `
        color: ${colorText};
        box-shadow: 0 0 10px ${colorBack} inset;
    `
    document.querySelector('.capsLockBtn').style.cssText = `
        color: ${colorText};
    `
}

const boxColor = (color) => {
    sessionStorage.removeItem("boxColor");
    sessionStorage.setItem("boxColor", color);
}

document.querySelectorAll('.btn-color-box__bx').forEach(box => {
    box.addEventListener('click', event => {
        switch (event.target.classList[1]) {
            case 'btn-color-box__1': {
                caseFilterColor('red', 'brown')
                boxColor('brown')
                break;
            }

            case 'btn-color-box__2':
                caseFilterColor('rgb(255, 174, 0)', 'rgb(255, 174, 0)')
                boxColor('rgb(255, 174, 0)')
                break;

            case 'btn-color-box__3':
                caseFilterColor('skyblue', 'skyblue')
                boxColor('skyblue')
                break;

            case 'btn-color-box__4':
                caseFilterColor('rgb(0, 176, 0)', 'rgb(0, 176, 0)')
                boxColor('rgb(0, 176, 0)')
                break;

            default:
                break;
        }
    })
})

caseFilterColor(sessionStorage.getItem("boxColor"), sessionStorage.getItem("boxColor"))

const test = (isDecode = false) => {
    let myDecode, myEncode
    let result = document.getElementById("Result")
    if (isDecode) {
        myEncode = window.btoa(document.getElementById("UserInput").value)
        textEncryp = myEncode
        result.innerHTML = myEncode
    } else {
        myDecode = window.atob(textEncryp)
        result.innerHTML = myDecode
    }
}

btnEncryption.addEventListener('click', () => test(true))
btnDecoding.addEventListener('click', () => test(false))