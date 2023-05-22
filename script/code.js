function display(value) {
    document.querySelector('#output').value += value;
}

function ce() {
    document.querySelector('#output').value = '';
}

function backspace() {
    // let output = document.querySelector('#output').value = output.slice(0, -1);
    output.value = output.value.slice(0, -1)
}

    document.querySelector('#backspace').addEventListener('click', backspace());

// function equal('#output') {
//     document.querySelector('#output').value = 
// }
// let display=document.getElementById(ouput)
