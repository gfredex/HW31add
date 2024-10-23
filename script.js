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
    // не понятно как полчить информацию о файле

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
