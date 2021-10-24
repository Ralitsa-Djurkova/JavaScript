function addItem() {
    const inputText = document.getElementById("newItemText");
    console.log(inputText);

    const inputText2 = document.getElementById("newItemValue");
    console.log(inputText2);

    const select = document.getElementById('menu');
    const option = document.createElement('option');
    option.value = inputText2.value;
    option.textContent = inputText.value;
    select.appendChild(option);
    inputText.value = '';
    inputText2.value = '';
    
}