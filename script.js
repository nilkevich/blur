document.getElementById('imageUpload').addEventListener('change', function(event) {
	const file = event.target.files[0];
	if (file) {
			const reader = new FileReader();
			reader.onload = function(e) {
					const img = document.getElementById('uploadedImage');
					img.src = e.target.result;
			}
			reader.readAsDataURL(file);
	}
});

document.getElementById('blurRange').addEventListener('input', function(event) {
	const blurValue = event.target.value;
	const img = document.getElementById('uploadedImage');
	img.style.filter = `blur(${blurValue}px)`;
});