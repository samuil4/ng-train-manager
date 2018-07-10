(function(window, document) {
    var allDropdownOptions = document.querySelectorAll('.input-field.dropdown .option');

    Array.prototype.forEach.call(allDropdownOptions, function(dropdownOption) {
        dropdownOption.addEventListener('click', function(event) {
            event.stopPropagation();
            document.querySelector('.input-field.dropdown .chosen-item').textContent = this.textContent;
            document.querySelector('.input-field.dropdown .chosen-item').style.display = 'block';
            document.querySelector('.input-field.dropdown .options').style.display = 'none';
        }, false);
    });
})(window, document);

