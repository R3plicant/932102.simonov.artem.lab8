document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.inputs-container');
    var inputExample = document.querySelector('.input-class');
    var saveButton = document.getElementsByName('save')[0];
    var addElementButton = document.getElementsByName('add-element')[0];

    addElementButton.addEventListener('click', function(){
        var newElement = inputExample.cloneNode(true);
        var inputs = newElement.querySelectorAll('input[type="text"]');
        inputs.forEach(function(input) {
            input.value = '';
        });
        container.appendChild(newElement);
    });

    saveButton.addEventListener('click', function() {
        var inputs = document.querySelectorAll('.input-class');
        var data = {};
        inputs.forEach(function(input) {
            console.log(input);
            var keys = input.querySelectorAll('input[type="text"]');
            data[keys[0].value] = keys[1].value;
            console.log(data);
        });
        console.log(data);
        var text = JSON.stringify(data);
        var div = document.createElement("div");
        div.innerHTML = text;
        document.body.appendChild(div);
    });

    container.addEventListener('click', function(e) {
        console.log(e);
        if (e.target.name === 'up-arrow') {
            var inputClassDiv = e.target.parentNode;
            var previousSibling = inputClassDiv.previousElementSibling;
            if (previousSibling) {
                container.insertBefore(inputClassDiv, previousSibling);
            }
        } else if (e.target.name === 'down-arrow') {
            var inputClassDiv = e.target.parentNode;
            var nextSibling = inputClassDiv.nextElementSibling;
            if (nextSibling) {
                container.insertBefore(nextSibling, inputClassDiv);
            }
        } else if (e.target.name === 'delete') {
            var inputClassDiv = e.target.parentNode;
            container.removeChild(inputClassDiv);
        }
    });
});
