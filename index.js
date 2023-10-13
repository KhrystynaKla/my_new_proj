console.log('hello guys!')
fetch('http://localhost:3000/foods')
.then(response=> response.json())
.then(data=>{
    data.forEach(element => {
        addBurgerToList(element)
    });
})

const ul = document.getElementById()
console.log(ul)
function addBurgerToList(element){
    const li = document.createElement('li')
    li.textContent=`${element.name} costs ${element.price}`
    ul.appendChild(li)
}