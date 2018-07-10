(function(window, document) {
    var allTypeaheads = document.querySelectorAll('.typeahead-wrapper');

    Array.prototype.forEach.call(allTypeaheads, function(typeahead) {
        bindOptionsClick(typeahead);
        bindRemoveChosenItem(typeahead);

        //this imitates a request to the server and should be replaced
        //with an AJAX request
        typeahead.querySelector('input').addEventListener('input', function(event) {
            setTimeout(function() {
                typeahead.querySelector('.options').classList.add('display-none');
                typeahead.querySelector('.loader').classList.remove('display-none');

                setTimeout(function() {
                    typeahead.querySelector('.loader').classList.add('display-none');
                    typeahead.querySelector('.options').classList.remove('display-none');
                }, 3000);
            }, 200);
        }, false);
    });

    function bindOptionsClick(typeahead) {
        var input = typeahead.querySelector('input');
        var optionsForThisTypeahead = typeahead.querySelectorAll('.options .option');
        var chosenItemSlot = typeahead.querySelector('.chosen-item');
        var allOptions = typeahead.querySelector('.options');

        Array.prototype.forEach.call(optionsForThisTypeahead, function(option) {
            option.addEventListener('click', function(event) {
                chosenItemSlot.querySelector('.content').innerHTML = this.innerHTML;
                chosenItemSlot.classList.remove('display-none');
                input.classList.add('display-none');
                allOptions.classList.add('display-none');
            }, false);
        });
    }

    function bindRemoveChosenItem(typeahead) {
        var input = typeahead.querySelector('input');
        var removeButton = typeahead.querySelector('.chosen-item .remove');
        var chosenItemSlot = typeahead.querySelector('.chosen-item');

        removeButton.addEventListener('click', function() {
            chosenItemSlot.querySelector('.content').innerHTML = '';
            chosenItemSlot.classList.add('display-none');
            input.classList.remove('display-none');
            input.value = '';
            input.focus();
        }, false);
    }
})(window, document);