
function updateClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    document.getElementById('hour').style.transform = `rotate(${30 * hour + min / 2}deg)`;
    document.getElementById('min').style.transform = `rotate(${6 * min}deg)`;
    document.getElementById('sec').style.transform = `rotate(${6 * sec}deg)`;
}
setInterval(updateClock, 1000);
updateClock();