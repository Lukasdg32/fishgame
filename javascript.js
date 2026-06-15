const tilePixelValue = 16;
const worldPixelScaleValue = 3
;

const mainContainer = document.querySelector(".main-container");

const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
gameContainer.style.width = `${tilePixelValue * worldPixelScaleValue * 21}px`;
gameContainer.style.height = `${tilePixelValue * worldPixelScaleValue * 10}px`;
mainContainer.appendChild(gameContainer);

const worldAreaBox = document.createElement("div");
worldAreaBox.classList.add("world-area-box");
worldAreaBox.style.width = `${tilePixelValue * worldPixelScaleValue * 16}px`;
worldAreaBox.style.height = `${tilePixelValue * worldPixelScaleValue * 8}px`;
gameContainer.appendChild(worldAreaBox);

const inventoryBox = document.createElement("div");
inventoryBox.classList.add("inventory-box");
inventoryBox.style.width = `${tilePixelValue * worldPixelScaleValue * 10}px`;
inventoryBox.style.height = `${tilePixelValue * worldPixelScaleValue * 1}px`;
inventoryBox.style.marginTop = `${tilePixelValue * worldPixelScaleValue * 0.5}px`;
gameContainer.appendChild(inventoryBox);

const shopBox = document.createElement("div");
shopBox.classList.add("shop-box");
shopBox.style.width = `${tilePixelValue * worldPixelScaleValue * 3}px`;
shopBox.style.height = `${tilePixelValue * worldPixelScaleValue * 3}px`;
shopBox.style.marginLeft = `${tilePixelValue * worldPixelScaleValue * 1}px`;
worldAreaBox.appendChild(shopBox);

const playerBox = document.createElement("div");
playerBox.classList.add("player-box");
playerBox.style.width = `${tilePixelValue * worldPixelScaleValue * 1}px`;
playerBox.style.height = `${tilePixelValue * worldPixelScaleValue * 2}px`;
playerBox.style.marginLeft = `${tilePixelValue * worldPixelScaleValue * 1}px`;
worldAreaBox.appendChild(playerBox);

const fishBox = document.createElement("div");
fishBox.classList.add("fish-box");
fishBox.style.width = `${tilePixelValue * worldPixelScaleValue * 8}px`;
fishBox.style.height = `${tilePixelValue * worldPixelScaleValue * 4}px`;
fishBox.style.marginLeft = `${tilePixelValue * worldPixelScaleValue * 1}px`;
worldAreaBox.appendChild(fishBox);

const fish = document.createElement("div");
fish.classList.add("fish");
fish.style.width = `${tilePixelValue * worldPixelScaleValue * 1}px`;
fish.style.height = `${tilePixelValue * worldPixelScaleValue * 1}px`;
fishBox.appendChild(fish);

