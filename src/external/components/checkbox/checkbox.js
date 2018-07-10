(function(window, document) {
    var allCheckboxes = document.querySelectorAll('.checkable[data-type="checkbox"]');

    Array.prototype.forEach.call(allCheckboxes, function(checkable) {
        checkable.addEventListener('click', function(event) {
            this.classList.toggle('checked');
            this.querySelector('input').checked = !this.querySelector('input').checked;
        }, false);
    });
})(window, document);