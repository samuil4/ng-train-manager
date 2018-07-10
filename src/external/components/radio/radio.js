(function(window, document) {
    var allRadioButtons = document.querySelectorAll('.checkable[data-type="radio"]');

    Array.prototype.forEach.call(allRadioButtons, function(checkable) {
        checkable.addEventListener('click', function(event) {
            var selectedItem = getSelectedItem();

            if (selectedItem) {
                selectedItem.classList.remove('checked');
                selectedItem.querySelector('input').removeAttribute('checked');
            }

            this.classList.add('checked');
            this.querySelector('input').checked = 'checked';

        }, false);
    });

    function getSelectedItem() {
        var checkedElement = Array.prototype.filter.call(allRadioButtons, function(radio) {
            return radio.classList.contains('checked');
        })[0];

        return checkedElement;
    }
})(window, document);

