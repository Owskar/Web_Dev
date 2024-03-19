let dragSrcEl = null;

function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); 
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter() {
    this.classList.add('over');
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation(); 
    }
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDragEnd() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.classList.remove('over'));
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('dragstart', handleDragStart, false);
    number.addEventListener('dragenter', handleDragEnter, false);
    number.addEventListener('dragover', handleDragOver, false);
    number.addEventListener('dragleave', handleDragLeave, false);
    number.addEventListener('drop', handleDrop, false);
    number.addEventListener('dragend', handleDragEnd, false);
});
