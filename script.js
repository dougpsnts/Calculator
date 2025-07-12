const input = document.getElementById('input');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//new code starts here

input.addEventListener('keydown', function (ev) {
	ev.preventDefault();
	if (allowedKeys.includes(ev.key)) {
		input.value += ev.key;
		return
	}
	if (ev.key === 'Backspace') {
		input.value = input.value.slice(0, -1);
	}	
})


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
	charKeyBtn.addEventListener("click", function () {
		const value = charKeyBtn.dataset.value
		input.value += value;
	});
})
