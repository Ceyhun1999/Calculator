const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');
const button = document.querySelectorAll('button');
const inputSwitch = document.getElementById('switch');
const label = document.getElementById('label');
const calculator = document.getElementById('calculator');
const btn = document.querySelectorAll('.btn');

function hesabla() {
    display2.value = eval(display1.value)
}
function yaz(x) {
    display1.value += x
}
function reset() {
    display1.value = '';
    display2.value = '';
}
function back() {
    display1.value = display1.value.substring(0, display1.value.length - 1);
}
function backgroundCheck() {
  
    if (calculator.style.background === "rgb(34, 40, 49)") {
        calculator.style.background = "#eeeeee"
        display1.style.background = "#eeeeee"
        display2.style.background = "#eeeeee"
        display1.style.color = "black"
        display2.style.color = "black"
        button.forEach((element) => {
            element.style.background = '#2228310d'
        });
        btn.forEach((item) => {
            item.style.color = 'black'
        });
    } 
    else {
        calculator.style.background = "rgb(34, 40, 49)"
        display1.style.background = "rgb(34, 40, 49)"
        display2.style.background = "rgb(34, 40, 49)"
        display1.style.color = "#eeeeee"
        display2.style.color = "#eeeeee"
        button.forEach((element) => {
            element.style.background = '#393E46'
        });
        btn.forEach((item) => {
            item.style.color = '#fff'
        })
    }
}
