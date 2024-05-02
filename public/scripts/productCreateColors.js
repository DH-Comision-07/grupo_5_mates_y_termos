function addColor() {
    const colorVariations = document.getElementById('colorAdd');
    const newColorDiv = document.createElement('div');
    newColorDiv.innerHTML = `
        <div style="margin-top: 10px;">
        <label for="colors">Color:</label>
        <input type="text" id="colors" name="colors[]" required>
        <a  onclick="removeColor(this)" class="form__a--colors"><i class="fa-solid fa-trash"></i></a>
        </div>
    `;
    colorVariations.appendChild(newColorDiv);
}
function removeColor(button) {
    button.parentNode.remove();
}
