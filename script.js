const dragArea = document.getElementById('upload-container');
const file = document.getElementById('file-input');
dragArea.addEventListener('drag', e => {
    e.preventDefault();
});
dragArea.addEventListener('dragstart', e => {
    e.preventDefault();
});
dragArea.addEventListener('dragend', e => {
    e.preventDefault();
});
dragArea.addEventListener('drop', function (e) {
    e.preventDefault();
    dragArea.classList.remove('dragover');

    if (e.dataTransfer.files[0].size <= 8388608 && e.dataTransfer.files[0].type.includes('image')) {
        dragArea.querySelector('label').textContent = '';
        dragArea.querySelector('span').textContent = e.dataTransfer.files[0].name;
        console.log(e.dataTransfer.files[0]);
    } else {
        alert('Не тот файл или его размер больще 1МБ');
    }



});
dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragArea.classList.add('dragover');
})
dragArea.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dragArea.classList.add('dragover');
})
dragArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dragArea.classList.remove('dragover');
})
