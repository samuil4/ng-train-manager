(function(window, document) {
    var allTagsInputs = document.querySelectorAll('.tags-input-wrapper');
    window.tagInputsValues = {};

    Array.prototype.forEach.call(allTagsInputs, function(tagInput) {
        var input = tagInput.querySelector('input');
        window.tagInputsValues[input.id] = [];

        input.addEventListener('keyup', function(event) {
            if (this.value.trim() !== '') {
                //if the user has pressed either Enter or Space
                if (event.keyCode === 13 || event.keyCode === 32) {
                    var enteredValueMarkup = '<div class="entered-tag">' + this.value + '</div>';

                    window.tagInputsValues[this.id].push(this.value);
                    tagInput.querySelector('.entered-items .inner').innerHTML += enteredValueMarkup;

                    this.value = '';
                }
            }

            //if the user has pressed Backspace
            if (event.keyCode === 8 && tagInput.querySelectorAll('.entered-tag').length > 0) {
                var enteredTags = tagInput.querySelectorAll('.entered-tag');
                var lastTag = enteredTags[enteredTags.length - 1];

                window.tagInputsValues[this.id].pop();
                lastTag.parentNode.removeChild(lastTag);
            }
        }, false);
    });
})(window, document);