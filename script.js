let itemInput = document.getElementById('itemInput')
let addItemButton = document.getElementById('addItem')
let shoppingList = document.getElementById('shoppingList')

addItemButton.addEventListener('click', addItem)

function addItem() {
    let newItemText = itemInput.value.trim()
    if (newItemText != ''){
        let newItem = document.createElement('li')
        newItem.innerHTML = `
            <span>${newItemText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `
        shoppingList.appendChild(newItem)

        itemInput.value = ''
        itemInput.focus()

        newItem.querySelector('.delete').addEventListener('click', function() {deleteItem(newItem)})
        newItem.querySelector('.edit').addEventListener('click', function() {editItem(newItem)})
    }
}

function deleteItem(item) {
    let confirmation = confirm('Are you sure you want to delete this item?')
    if (confirmation) {
        item.remove()
    }
}

function editItem(item) {
    let spanElement = item.querySelector('span')
    let newText = prompt('Edit item:', spanElement.textContent)
    if (newText !== null) {
        spanElement.textContent = newText
    }
}