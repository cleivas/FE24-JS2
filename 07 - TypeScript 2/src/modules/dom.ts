const img = document.createElement('img');
console.log(img.src)
// console.log(img.value)


const btn = document.querySelector('#knapp') as HTMLButtonElement;

// console.log(btn.src)

btn.addEventListener('click', event => {
    // TypeScript vet att event är ett MouseEvent pga 'click'
    console.log(event.clientX)
})