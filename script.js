document.getElementById('imageUpload').addEventListener('change', function(event) {
	const file = event.target.files[0];
	if (file) {
			const reader = new FileReader();
			reader.onload = function(e) {
					const img = document.getElementById('uploadedImage');
					img.src = e.target.result;
					document.getElementById('imageContainer').classList.remove('hidden');
					document.querySelector('.text-container').classList.remove('hidden');
			}
			reader.readAsDataURL(file);
	}
});

document.getElementById('blurRange').addEventListener('input', function(event) {
	const blurPercent = event.target.value;
	const maxBlurValue = 10; // Максимальное значение размытия в пикселях
	const blurValue = (blurPercent / 100) * maxBlurValue;
	const img = document.getElementById('uploadedImage');
	img.style.filter = `blur(${blurValue}px)`;
	document.getElementById('blurValue').textContent = blurPercent;
	this.style.background = `linear-gradient(to right, #4CAF50 ${percentage}%, #ddd ${percentage}%)`;
});