const timeElement = document.getElementById('abc');
const dateElement = document.getElementById('date');
const toggleButton = document.getElementById('toggleFormat');
let use24Hour = true;

function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);

    let hours = now.getHours();
    let ampm = '';
    if (!use24Hour) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
    }

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const hoursString = String(hours).padStart(2, '0');

    timeElement.textContent = `${hoursString}:${minutes}:${seconds}${ampm}`;
}

toggleButton.addEventListener('click', () => {
    use24Hour = !use24Hour;
    toggleButton.textContent = use24Hour ? 'Switch to 12-hour' : 'Switch to 24-hour';
    updateClock();
});

updateClock();
setInterval(updateClock, 1000);
