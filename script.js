const itemsContainer = document.getElementById('items');
const pointer = document.getElementById('pointer');

let currentSlot = 1

function renderHotbar (){
    for (let i = 1; i <= 9; i++){
        const slot = document.createElement('div');
        slot.id = `${i}`
        itemsContainer.append(slot);
        if (currentSlot == i) {
           slot.classList.add('hover'); 
        }
    }
} 

document.addEventListener("keydown", (e) => {
    if (!['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
        return
    }
    currentSlot = e.key;
    const slot = document.getElementById(e.key)
    itemsContainer.replaceChildren('')
    slot.classList.add('hover');
    renderHotbar();
})

renderHotbar();