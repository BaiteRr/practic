const header = document.querySelector('.hello')
const training = document.querySelector('#training')
const heding2 = document.querySelector('.another')

setTimeout(() => {
    addStyles(header, 'JavaScript')
}, 1500)

setTimeout(() => {
    addStyles(training, 'Я Иду!', 'green')
}, 4000)

setTimeout(() => {
    addStyles(heding2, 'Ку Ку', 'purple', '2rem')
}, 2500)

function addStyles (node, text, color = 'yellow', fontSize) {
    node.style.color = color
    node.textContent = text
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

header.onclick = () => {
    if (header.style.color === 'yellow') {
        header.style.color = 'red'
        header.style.backgroundColor = '#fff'
    } else {
        header.style.color = 'yellow'
        header.style.backgroundColor = 'black'
    }
}

training.addEventListener('dblclick', () => {
    if (training.style.color === 'green') {
        training.style.color = 'red'
        training.style.backgroundColor = '#fff'
    } else {
        training.style.color = 'green'
        training.style.backgroundColor = 'black'
    }
})

