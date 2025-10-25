const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-button');
const plusBtn = document.querySelector('.plus-button');
const changeby = document.querySelector('.changeby');
const resetBtn = document.querySelector('button:last-of-type'); // reset button

function updateColor() {
    let value = parseInt(count.innerText);
    if(value > 0) count.style.color = 'green';
    else if(value < 0) count.style.color = 'red';
    else count.style.color = 'black';
}

// Minus button
minusBtn.addEventListener('click', () => {
    let countValue = parseInt(count.innerText);
    let changeValue = parseInt(changeby.value) || 1; // default 1
    countValue -= changeValue;
    count.innerText = countValue;

     updateColor();
});

// Plus button
plusBtn.addEventListener('click', () => {
    let countValue = parseInt(count.innerText);
    let changeValue = parseInt(changeby.value) || 1;
    countValue += changeValue;
    count.innerText = countValue;

     updateColor();
});

// Reset button
resetBtn.addEventListener('click', () => {
    count.innerText = 0;
    changeby.value = 1;

     updateColor();
});
