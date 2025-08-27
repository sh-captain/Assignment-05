// Counts
let hearts = 0;
let coins = 100;
let copies = 0;

//  Navbar 
const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

// Heart Button
document.querySelectorAll(".heartBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    hearts++;
    heartCount.textContent = hearts;
  });
});

// Copy Button
document.querySelectorAll(".copyBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.parentElement.parentElement.querySelector("p.font-bold").textContent;
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    copies++;
    copyCount.textContent = copies;
  });
});

// Call Button
document.querySelectorAll(".callBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const serviceName = btn.dataset.name;
    const serviceNumber = btn.dataset.number;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    const time = new Date().toLocaleTimeString();
    alert(`Calling ${serviceName} at ${serviceNumber}`);

      //  history
    const li = document.createElement("li");
    li.textContent = `${serviceName} - ${serviceNumber} (${time})`;
    historyList.appendChild(li);
  });
});

// Clear History
document.getElementById("clearHistory").addEventListener("click", () => {
  historyList.innerHTML = "";
});