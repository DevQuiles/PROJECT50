const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active') /*En caso de que este lo quita y en caso de que no lo añade*/
    input.focus()
})