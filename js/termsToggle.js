const hidden = document.getElementById('hidden');
const toggle = document.getElementById('toggle');
let i = 0;

toggle.onclick = function() {
	if (i % 2 === 0) {
		hidden.setAttribute('style', 'display: block;');
	} else {
		hidden.setAttribute('style', 'display: none;');
	}
	i += 1;
};
