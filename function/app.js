function greet (name) {
    console.log('Привет -', name)
}

const greet2 = function greet2(name) {
    console.log('Привет -', name)
}

greet('Таня')
greet2('Таня')



// const greet = (name) => {
//     console.log('Привет -', name)
// }

// greet('Илья')

// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 99) {
//         clearInterval(interval)
//     }
//     console.log(++counter)
// }, 100)


const lol = secondName => {
    console.log('Привет', secondName)
}

lol('Lisak')