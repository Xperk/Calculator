const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const display = $('.display');
const btn = $$('button');
btn.forEach(function (element) {
    element.onclick = function () {
        if (element.id == 'clear')
            display.innerText = '';
        else if (element.id == 'del') {
            let displaystring = display.innerText.toString();
            display.innerText = displaystring.substr(0, displaystring.length - 1);
        }
        else if (element.id == 'equal') {
            display.innerText = eval(display.innerText);
        }
        else {
            display.innerText += element.innerText;
        }
    }
})