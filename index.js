const gifts = ["Teddy Bear", "Drone", "Doll"];

function displayGifts() {
    const giftList = document.getElementById('giftList');
    giftList.innerHTML = '';  

    gifts.forEach(gift => {
        const listItem = document.createElement('li');
        listItem.textContent = gift;
        giftList.appendChild(listItem);
    });
}

function addGift(event) {
    event.preventDefault();  
    const newGift = document.getElementById('newGift').value;

    if (newGift) {
        gifts.push(newGift);  
        displayGifts();  
        document.getElementById('newGift').value = '';  
    }
}

document.getElementById('giftForm').addEventListener('submit', addGift);

displayGifts();
