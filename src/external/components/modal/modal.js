(function(window, document) {
    var allModals = document.querySelectorAll('.modal-cover');
    var openButtons = document.querySelectorAll('[data-modal-target]');

    Array.prototype.forEach.call(openButtons, function(openButton) {
        openButton.addEventListener('click', function(event) {
            var targetModal = document.querySelector('[data-modal=' + openButton.dataset.modalTarget + ']');
            targetModal.classList.remove('display-none');
        }, false);
    });

    Array.prototype.forEach.call(allModals, function(modal) {
        var closeButton = modal.querySelector('.close');

        closeButton.addEventListener('click', function(event) {
            modal.classList.add('display-none');
        }, false);
    });
})(window, document);

