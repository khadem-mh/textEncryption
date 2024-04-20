const btnEncryption = document.querySelector('#btnEncryption')
const btnDecoding = document.querySelector('#btnDecoding')

let char = document.querySelector('#char');
let textArea = document.querySelector('#UserInput');

textArea.addEventListener('input', event => {
    if (event.data != null) {
        char.value += event.data

    }
    if (event.data == null) {

        char.value = textArea.value.slice(-1)

    }
    if (event.data == ' ') {
        char.value = ''
        char.value += event.data
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

/* const boxColor = (color) => {
    sessionStorage.removeItem("boxColor");
    sessionStorage.setItem("boxColor", color);
} */

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
/* caseFilterColor(sessionStorage.getItem("boxColor"), sessionStorage.getItem("boxColor")) */



var MyEncode
function Encode_Text() {
    var MyText, result;
    MyText = document.getElementById("UserInput").value;
    MyEncode = window.btoa(MyText);
    result = document.getElementById("Result");
    result.innerHTML = MyEncode;
}

function Decode_Text() {
    var MyText, MyDecode, result;
    MyText = MyEncode;
    MyDecode = window.atob(MyText);
    result = document.getElementById("Result");
    result.innerHTML = MyDecode;
}

btnEncryption.addEventListener('click', Encode_Text)
btnDecoding.addEventListener('click', Decode_Text)