let counter = document.getElementById('counter');
let decreaseBtn = document.getElementById('decreaseBtn');
let resetBtn = document.getElementById('resetBtn');
let increaseBtn = document.getElementById('increaseBtn');
let count = 0;

decreaseBtn.addEventListener('click', () => {
    
    count--;
    updateDisplay();
    
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    counter.innerHTML = count;

    if (count < 0) {
        counter.style.color = 'red';
    } else if (count > 0) {
        counter.style.color = 'green';
    } else {
        counter.style.color = 'white';
    }
}


