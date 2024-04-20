const btnEncryption = document.querySelector('#btnEncryption')
const btnDecoding = document.querySelector('#btnDecoding')

let char = document.querySelector('#char');
let textArea = document.querySelector('#UserInput');

textArea.addEventListener('input', (event) => {
    if (event.data != null) {
        char.innerHTML += event.data

    }
    if (event.data == null) {

        char.innerHTML = textArea.value.slice(-1)

    }
    if (event.data == ' ') {
        char.innerHTML = ''
        char.innerHTML += event.data
    }
})


//Box colors

const caseFilterColor = (colorText, colorBack) => {
    document.querySelector('textarea').style.cssText = `
                    color: ${colorText};
                    border: 1px solid ${colorBack};
                    box-shadow: 0 0 40px ${colorBack} inset, 0 0 20px black;
                `
    document.querySelectorAll('.btn-e')[0].style.cssText = `
                    color: ${colorText};
                    border: 1px solid ${colorBack};
                    box-shadow: 0 0 10px ${colorBack} inset, 0 0 20px black;
                `
    document.querySelectorAll('.btn-e')[1].style.cssText = `
                    color: ${colorText};
                    border: 1px solid ${colorBack};
                    box-shadow: 0 0 10px ${colorBack} inset, 0 0 20px black;
                `
    document.querySelector('.btn-color-box').style.cssText = `
                    color: ${colorText};
                    border: 1px solid ${colorBack};
                    box-shadow: 0px -4px 10px ${colorBack} inset, 0 0 20px black;
                `
    document.querySelector('.parent-capsLockBtn').style.cssText = `
                    color: ${colorText};
                    border: 1px solid ${colorBack};
                    box-shadow: 0px -4px 10px ${colorBack} inset, 0 0 20px black;
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
    box.addEventListener('click', (event) => {

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
                caseFilterColor('green', 'green')
                boxColor('green')
                break;

            default:
                break;
        }
    })
})
caseFilterColor(sessionStorage.getItem("boxColor"), sessionStorage.getItem("boxColor"))



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