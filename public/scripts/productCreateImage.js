document.getElementById('imageInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = ''; // Limpia previsualizaciones anteriores

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '90px';
            img.style.maxHeight = '90px';
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
