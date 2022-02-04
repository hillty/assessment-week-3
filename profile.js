let colorButton = document.querySelector('#color')

colorButton.addEventListener('click', () => {
    alert('My favorite color is black.')
})

let placeButton = document.querySelector('#place')

placeButton.addEventListener('click', () => {
    alert('My favorite place is Lake Powell.')
})

let ritualButton = document.querySelector('#ritual')

ritualButton.addEventListener('click', () => {
    alert('My favorite ritual is playing valheim by myself while I am sad.')
})


// const buttonClassHere = document.querySelectorAll('button')

// for(let i = 0; i < buttonClassHere.length; i++)
//     buttonClassHere[i].addEventListener('click', (e) => {
//         alert(`My favorite ${e.target.id} is ${e.target.value}`)
//     })