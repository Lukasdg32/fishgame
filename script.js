const itemsContainer = document.getElementById('items');
const pointer = document.getElementById('pointer');

// inventoryArray.push("bait")

// need a way to push an item into our inventory array.   and render only as many items we have. the item needs the correct image. to start we only use bait. but with option to add others.


let currentSlot = 1
let inventoryArray = ["bait", "bait", "fish", "rod", "weed", "axe", "wood", "bluefish", "crimsonfish", "bait", "bait"]


const itemsTable = {

    fish:{
        baseSellPrice: 0,
        imageUrl: "./images/fish.png",

        
    },

    rod:{
        sellPrice: 0,
        imageUrl: "./images/rod.png"
    },

    bait:{
        sellPrice: 0,
        imageUrl: "./images/bait.png"
    }

    
 }



function renderHotbar (){
    itemsContainer.replaceChildren('')
    for (let i = 1; i <= 9; i++){
        const slot = document.createElement('div');
        slot.id = `${i}`
        itemsContainer.append(slot);

        let item = inventoryArray[i - 1]
        let itemData = itemsTable[item]

        if (item){
            slot.style.backgroundImage = itemData
            ? `url(${itemData.imageUrl})`
            : `url(https://img.freepik.com/premium-vector/pixel-art-hippo-angry-face_150088-2136.jpg)`
        }


        if (currentSlot == i) {
           slot.classList.add('hover'); 
        }
    }
} 

document.addEventListener("keydown", (e) => {
    console.log(currentSlot)
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9',].includes(e.key)) {
        currentSlot = Number(e.key);
    }

    if (currentSlot < 9 && e.key === "ArrowRight") {
        currentSlot += 1
    }
    if (currentSlot > 1 && e.key === "ArrowLeft") {
        currentSlot -= 1
    }
    
    console.log(currentSlot)
    const slot = document.getElementById(`${currentSlot}`)
    console.log(slot)
    slot.classList.add('hover');
    renderHotbar()

})

renderHotbar();