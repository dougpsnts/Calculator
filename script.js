const input = document.getElementById('input');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Capture the value of the keys when pressed

input.addEventListener('keydown', function (ev) {
	// Prevent default behavior for keys that are not allowed
	ev.preventDefault();
	if (allowedKeys.includes(ev.key)) {
		input.value += ev.key;
		return
	}
	// Handle special keys
	if (ev.key === 'Backspace') {
	input.value = input.value.slice(0, -1);
	}	
	if (ev.key === "Enter") {
    calculate()
  }
})

document.getElementById("equal").addEventListener("click", calculate)

// Capture the value of the buttons when clicked

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
	charKeyBtn.addEventListener("click", function () {
		const value = charKeyBtn.dataset.value
		input.value += value;
	});
})

// Add the calc logic

function calculate() {
	const result = eval(input.value)
	input.value = result
}
